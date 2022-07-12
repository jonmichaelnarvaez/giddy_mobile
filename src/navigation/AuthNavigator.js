import React, {useState, useEffect} from 'react';
import {Pressable, Image} from 'react-native';
// stacks & Navigator
import TabNavigator from './TabNavigator';
// screens
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import TrackerScreen from '../screens/Onboarding/Trackers';
import Authenticate from '../screens/Onboarding/Authenticate'
import PassCodeV1 from '../screens/Onboarding/Password';
import EdTrackerQuestions from '../screens/TrackerQuestions/Ed/EdTrackerQuestions';

// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
    <Image
        style={{
        height: 35,
        width: 100
    }}
        source={require('../assets/logos/Giddy_white.png')}/>)
}
function TrackerTitle() {
    return (<Image
        style={{
        height: 35,
        width: 100
    }}
        source={require('../assets/logos/Giddy_blue.png')}/>)
}

const QuizStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Ed Quiz"
             component={EdTrackerQuestions} 
             options={{
                headerShown: false,
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
            }}/>
        </Stack.Navigator>
    )
}

const AuthStack = () => {
// need to add async storage function to only call the on onbarding screens one time
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="On Boarding"
                component={OnboardingScreen}
                options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: (props) => <LogoTitle {...props} />,
                
            }}/>
            <Stack.Screen
            name="Select a Tracker"
            component={TrackerScreen}
            options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: (props) => <TrackerTitle {...props}/>,
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
            }}
            />
            <Stack.Screen
            name='Quiz'
            component={QuizStack}
            options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: (props) => <TrackerTitle {...props}/>,
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
            }}
            />
            <Stack.Screen
                name="Authenticate"
                component={Authenticate}
                options={{
                headerShown: false,
            }}/>
            <Stack.Screen
                name="Passcode"
                component={PassCodeV1}
                options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: (props) => <LogoTitle {...props}/>,
                headerBackButtonMenuEnabled: false,
                headerBackTitleStyle: {color: "#BCE6E9"}
            }}/>
        </Stack.Navigator>
    )
};

export default AuthStack;