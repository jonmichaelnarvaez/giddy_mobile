import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "./reducers/index";
import reducers from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

// !!DEVELOPER!!
// This is JT's pre-existing redux code; the plan was to refractor all of this code to fit
// what we needed to take the application to market.
// Feel free to completely re-write to how you see fit.

// I show thunk because its what the dev notes say is the recommend middleware. I like persist because
// its what i've always worked with. This can be changed to what you know and love.

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({reducers});

const store = createStore(
    rootReducer, 
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk)));

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const persistor = persistStore(store);

export {store};