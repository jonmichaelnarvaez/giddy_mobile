import "expo-dev-client"
import {registerRootComponent} from 'expo';
import { Platform } from "react-native";
import App from './App';
// required for tab navigation
import 'react-native-gesture-handler';
import 'react-native-reanimated'
// import RCTDeviceEventEmitter from 'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter';

// RCTDeviceEventEmitter.emit('remoteNotificationReceived', {
//     remote: true,
//     aps: {
//       alert: 'Sample notification',
//       badge: '+1',
//       sound: 'default',
//       category: 'REACT_NATIVE',
//       'content-available': 1,
//     },
//   });
// // push notifications - android
// import PushNotification from 'react-native-push-notification'

// PushNotification.configure({
//     onNotification: function(notification) {
//         console.log('NOTIFICATION', notification);
//     },
//     requestPermissions: Platform.OS === 'ios',
// })

// register with Expo
registerRootComponent(App);

