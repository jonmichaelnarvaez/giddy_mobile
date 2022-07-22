import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({rootReducers});
const store = createStore(persistedReducer, rootReducer, applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, reducers);
const persistor = persistStore(store);

export {store, persistor};