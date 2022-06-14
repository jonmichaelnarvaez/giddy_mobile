import React from 'react'
// navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import ArticlesScreen from '../../screens/Articles/ArticlesScreen';
import ArticleDetailScreen from '../../screens/Articles/ArticleDetailScreen'

const ArticleStacks = createNativeStackNavigator();

export default function ArticleStack() {


    return (
        <ArticleStacks.Navigator
            screenOptions={{
            headerShown: true
        }}>
            <ArticleStacks.Screen
                name="Feed"
                component={ArticlesScreen}
                options={{
                headerShown: false
            }}/>
            <ArticleStacks.Screen
                name="Article Detail"
                component={ArticleDetailScreen}
                options={{
                headerShown: true,
                headerTransparent: true,
                headerBlurEffect: 'light',
                headerBackButtonMenuEnabled: false
            }}/>
        </ArticleStacks.Navigator>
    )
} 