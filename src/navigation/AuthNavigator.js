import React from 'react';
import {Pressable, Image} from 'react-native';
// stacks & Navigator
import TabNavigator from './TabNavigator';
// screens
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import Authenticate from '../screens/Onboarding/Authenticate'
import PassCodeV1 from '../screens/Onboarding/Password';
// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (<Image
        style={{
        height: 35,
        width: 100
    }}
        source={require('../assets/logos/Giddy_blue.png')}/>)
}

const AuthStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="On Boarding"
                component={OnboardingScreen}
                options={{
                headerShown: false,
                headerTitle: (props) => <LogoTitle {...props}/>
            }}/>
            <Stack.Screen
                name="Authenticate"
                component={Authenticate}
                options={{
                headerShown: false
            }}/>
            <Stack.Screen
                name="Passcode"
                component={PassCodeV1}
                options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
};

export default AuthStack;