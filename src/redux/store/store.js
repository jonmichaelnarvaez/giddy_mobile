import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';

const rootReducer = combineReducers({rootReducers});
const store = createStore(persistedReducer, rootReducer, applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, reducers);
const persistor = persistStore(store);

export {store, persistor};