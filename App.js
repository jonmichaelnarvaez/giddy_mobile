import React, {useState, useEffect} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
// import AuthStack from './src/navigation/AuthNavigator';
import SplashScreen from "./src/components/Splash/SplashScreen";

export default function App() {
    const [isLoading,
        setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 2000);
    }, []);

    return (
        <NavigationContainer>
            {!isLoading
                ? (
                <SplashScreen/>
                // add authentication logic here
                ) :  (
                     < AppStack />
                     )}
        </NavigationContainer>


    );
}
