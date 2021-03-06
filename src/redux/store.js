import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "./reducers/index";
import reducers from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, rootReducer, composeEnhancer(applyMiddleware(thunk)));
const rootReducer = combineReducers({rootReducers});
const persistedReducer = persistReducer(persistConfig, reducers);
const persistor = persistStore(store);

export {store, persistor};