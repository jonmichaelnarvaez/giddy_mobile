import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "./reducers/index";
import reducers from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({rootReducers,});

const store = createStore(rootReducer, persistedReducer, composeEnhancer(applyMiddleware(thunk)));
const persistor = persistStore(store);

const persistedReducer = persistReducer(persistConfig, reducers);

export {store, persistor};