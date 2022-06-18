import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
import AuthStack from './src/navigation/AuthNavigator';


export default function App() {

    return (
        <NavigationContainer>
            <AuthStack/>
           {/* <AppStack/> */}
        </NavigationContainer>
    );
}
