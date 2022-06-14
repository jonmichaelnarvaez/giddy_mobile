import {View, Text} from 'react-native'
import React from 'react'
// navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import SettingsScreen from '../../screens/Settings/SettingsScreen';
import SearchScreen from "../../screens/Search/SearchScreen";

const SettingStacks = createNativeStackNavigator();

export default function SettingStack() {
    return (
        <SettingStacks.Navigator>
            <SettingStacks.Screen
                name="Search Screen"
                component={SearchScreen}
                options={{
                headerShown: false
            }}/>
            <SettingStacks.Screen
                name="Setting Screen"
                component={SettingsScreen}
                options={{
                headerShown: false
            }}/>
        </SettingStacks.Navigator>
    )
}