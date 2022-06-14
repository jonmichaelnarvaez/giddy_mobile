import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// icons
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

// stacks
import CalendarStacks from './src/navigation/stacks/CalendarStack';
import ArticleStacks from './src/navigation/stacks/ArticleStack';
import AnalyticStacks from './src/navigation/stacks/AnalyticStack';
import SettingStacks from './src/navigation/stacks/SettingStack';

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen
                    name="Calendar"
                    component={CalendarStacks}
                    options={{
                    tabBarIcon: ({color, size}) => {
                        return <AntDesign name="calendar" size={size} color={color}/>
                    }
                }}/>
                <Tab.Screen
                    name="Analytics"
                    component={AnalyticStacks}
                    options={{
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="bar-chart" size={size} color={color}/>
                    }
                }}/>
                <Tab.Screen
                    name="Articles"
                    component={ArticleStacks}
                    options={{
                    tabBarIcon: ({color, size}) => {
                        return <Entypo name="news" size={size} color={color}/>
                    }
                }}/>
                <Tab.Screen
                    name="Search"
                    component={SettingStacks}
                    options={{
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name="search" size={size} color={color}/>
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
