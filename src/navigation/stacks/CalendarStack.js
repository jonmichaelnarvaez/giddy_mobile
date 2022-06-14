import {View, Text, Pressable, Image} from 'react-native'
import React from 'react'
// navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
// screens
import CalendarScreen from '../../screens/Calendar/CalendarScreen';
import UserAccountScreen from '../../screens/User/UserAccountScreen';
import PreferenceScreen from '../../screens/User/Preferences';
//icons
import {Avatar} from "react-native-paper"
import { Ionicons } from '@expo/vector-icons';


const CalendarStacks = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
        style={{height: 45, width: 125 }}
        source={require('../../assets/logos/Giddy_blue.png')}
        />
    )
}

export default function CalendarStack({color, size}) {

    const navigation = useNavigation();

    return (
        <CalendarStacks.Navigator>
            <CalendarStacks.Screen
                name="Giddy"
                component={CalendarScreen}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                headerShown: true,
                headerRight: () => (
                    <Pressable onPress={() => navigation.navigate("Account")}>
                        <Avatar.Image
                            size={40}
                            style={{
                            backgroundColor: '#161c45',
                            
                        }}
                            source={require('../../assets/images/avatar.jpg')}/>
                    </Pressable>
                ),
                headerTransparent: true,
                // headerBlurEffect: 'light'
            }}/>
            <CalendarStacks.Screen
                name="Account"
                component={UserAccountScreen}
                options={{
                presentation: 'modal',
                headerTransparent: true,
                headerBlurEffect: 'light',
                headerRight: () => (
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="md-close-outline" size={24} color="black" />
                    </Pressable>
                )
            }}/>
            <CalendarStacks.Screen
            name="Preferences"
            component={PreferenceScreen}
            options={{
                presentation: 'modal',
                headerTransparent: true,
                headerBlurEffect: 'light',
                
            }}
            />
        </CalendarStacks.Navigator>
    )
}