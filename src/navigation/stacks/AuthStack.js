import React from 'react';
// navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import OnboardingScreen from '../../screens/Onboarding/Onboarding';
import AuthenticateScreen from '../../screens/Onboarding/Authenticate';

const AuthStack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Onboard"
                component={OnboardingScreen}
                options={{
                headerShow: false
            }}/>
            <AuthStack.Screen
                name="Auth"
                component={AuthenticateScreen}
                options={{
                headerShow: false
            }}/>
        </AuthStack.Navigator>
    )
}