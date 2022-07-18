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


// export const store = configureStore({
//     reducer: {
//         user: authReducer,
// }})

const App = () => {
   
    // const token = useSelector(state => state.user.token)
   
    // const dispatch = useDispatch()

    const [isLoading,
        setIsLoading] = useState(false);

    // useEffect(() => {
    //     dispatch(addToken());
    // }, []);

    return (
        // <Provider store={store}>
        //     <NavigationContainer>
        //         {isLoading
        //             ? (
        //                 <SplashScreen/>
        //             )  : token  ? (
        //             <AppStack/>
        //             )
        //             : (
        //             <AuthStack />
        //             )}
        //     </NavigationContainer>
        //  </Provider> 
        <NavigationContainer>
            {isLoading ? (
                <SplashScreen/>
            ):
            <AppStack/>}
        </NavigationContainer>

    );
}

export default App;