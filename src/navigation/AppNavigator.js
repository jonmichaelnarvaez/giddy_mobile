import React from 'react';
import { Pressable, Image } from 'react-native';
// stacks & Navigator
import TabNavigator from './TabNavigator';
// screens
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen';
import ArticlesScreen from '../screens/Articles/ArticlesScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AddScreen from '../screens/Calendar/AddScreen';
import EdAddScreen from '../screens/Calendar/EdAddScreen';
import FertilityAddScreen from '../screens/Calendar/FertilityAddScreen';
// navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (<Image
        resizeMode="center"
        style={{
        height: 35,
        width: 100
    }}
        source={require('../assets/logos/Giddy_blue.png')}/>)
}

const App = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Giddy"
                component={TabNavigator} options={{headerShown: false,}}
                />
            <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Articles" component={ArticlesScreen}/>
            
            <Stack.Screen name="Analytics" component={AnalyticsScreen}/>
            <Stack.Screen name="Search" component={SettingsScreen}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen options={{headerTransparent: true,
                headerTitle: (props) => <LogoTitle {...props}/>
                }} name="New Event" component={AddScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    )
};

export default App;