import React, {useState, useEffect} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
import AuthStack from './src/navigation/AuthNavigator';
import SplashScreen from "./src/components/Splash/SplashScreen";
import {connect} from 'react-redux'

const App = () => {
    const [isLoading,
        setIsLoading] = useState(false);

    useEffect(() => {
        // this is for testing purposes only - do not leave time-out. It will slow down
        // the application.
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
                )
                : (< AppStack />)}
        </NavigationContainer>

    );
}

// const mapStateToProps = state => ({auth: state.auth}); export default
// connect(mapStateToProps)(App);

export default App;