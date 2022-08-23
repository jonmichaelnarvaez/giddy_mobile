import React,  {useState, useEffect, useRef} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AuthStack from './src/navigation/AuthNavigator';
import AppStack from './src/navigation/AppNavigator'
import SplashScreen from "./src/components/Splash/SplashScreen";
// redux
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
// notifications
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import storage from '@react-native-async-storage/async-storage';
import { Platform, Text } from 'react-native';
// flash messages
import FlashMessage from 'react-native-flash-message';

function App() {
    // state hooks
    // const [isLoading, setIsLoading] = useState(false)
    
        return (
            <NavigationContainer>
                    {/* add ternary logic for user login or register */}
                <AppStack/>
                <FlashMessage position='top'/>
            </NavigationContainer>
        );
    
}

export default App;