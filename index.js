import {registerRootComponent} from 'expo';
import App from './App';
import 'react-native-gesture-handler';
import 'react-native-reanimated'
import {name as appName} from './app.json';
// redux
import {Provider} from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/redux/reducers';
import { AppRegistry, Platform } from 'react-native';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware)))

const reduxApp = () => (
    <Provider store={createStoreWithMiddleware}>
        <App/>
    </Provider>
);

registerRootComponent(appName, () => reduxApp);

