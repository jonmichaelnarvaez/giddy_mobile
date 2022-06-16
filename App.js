import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'

export default function App() {

    return (
        <NavigationContainer>
           <AppStack/>
        </NavigationContainer>
    );
}
