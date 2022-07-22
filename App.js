import React, {Component, useState} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
import AuthStack from './src/navigation/AuthNavigator';
import SplashScreen from "./src/components/Splash/SplashScreen";
// redux
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';


function App() {
    const [isLoading, setIsLoading] = useState(true)

    
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                     <NavigationContainer>
                            {isLoading
                
                            ? (<SplashScreen/>)
                            
                            // : isAuth
                            
                                // ? (<AppStack/>)
                                : (<AuthStack/>)}
                        </NavigationContainer>
                </PersistGate>
            </Provider>
        );
    
}

export default App;