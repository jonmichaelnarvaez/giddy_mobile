import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
import AuthStack from './src/navigation/AuthNavigator';
// redux
import { Provider } from 'react-native-paper';
import {Store} from "./src/redux/store"; 


export default function App() {

    return (
   
         <NavigationContainer>
            {/* <AuthStack/>  */}
           <AppStack/>  
        </NavigationContainer>
    
    );
}
