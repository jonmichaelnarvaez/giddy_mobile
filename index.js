import "expo-dev-client"
import {registerRootComponent} from 'expo';
import { Platform } from "react-native";
import App from './App';
// required for tab navigation
import 'react-native-gesture-handler';
import 'react-native-reanimated'
// push notifications - android
import PushNotifications from 'react-native-push-notification'

PushNotification.configure({
    onNotification: function(notification) {
        console.log('NOTIFICATION', notification);
    },
    requestPermissions: Platform.OS === 'ios'
})

// register with Expo
registerRootComponent(App);

