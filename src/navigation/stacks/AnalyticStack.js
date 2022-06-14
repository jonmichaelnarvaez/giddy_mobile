import React from 'react'
// navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// screens
import AnalyticsScreen from '../../screens/Analytics/AnalyticsScreen';

const AnalyticsStacks = createNativeStackNavigator();

export default function AnalyticStack() {
    return (
        <AnalyticsStacks.Navigator>
            <AnalyticsStacks.Screen
                name="Analytic Screen"
                component={AnalyticsScreen}
                options={{
                headerShown: false
            }}/>
        </AnalyticsStacks.Navigator>
    )
}