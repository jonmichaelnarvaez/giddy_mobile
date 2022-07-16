import React, {useState, useEffect} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
import AuthStack from './src/navigation/AuthNavigator';
import SplashScreen from "./src/components/Splash/SplashScreen";
// middleware
import {configureStore} from '@reduxjs/toolkit';
import { useSelector, useDispatch, Provider } from 'react-redux';
import authReducer, {addToken} from "./src/redux/slices/AuthSlice";



const AppWrapper = () => {
    const store = configureStore({
        reducer: {
            user: authReducer,
    }})
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

const App = () => {
   
    const token = useSelector(state => state.user.token)
   
    const dispatch = useDispatch()

    const [isLoading,
        setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(addToken());
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer>
                {isLoading
                    ? (
                        <SplashScreen/>
                    )  : token  ? (
                    <AppStack/>
                    )
                    : (
                    <AuthStack />
                    )}
            </NavigationContainer>
         </Provider> 

    );
}

export default App;