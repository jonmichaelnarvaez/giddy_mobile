import "expo-dev-client"
import {registerRootComponent} from 'expo';
import { Platform } from "react-native";
import App from './App';
// required for tab navigation
import 'react-native-gesture-handler';
import 'react-native-reanimated'
// push notifications - android
import PushNotification from 'react-native-push-notification'

// logbox
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications


PushNotification.configure({
    onNotification: function(notification) {
        console.log('NOTIFICATION', notification);
    },
    requestPermissions: Platform.OS === 'ios',
})

// register with Expo
registerRootComponent(App);

