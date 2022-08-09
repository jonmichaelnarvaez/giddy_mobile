import React,  {useState, useEffect} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AuthStack from './src/navigation/AuthNavigator';
import SplashScreen from "./src/components/Splash/SplashScreen";
// redux
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
// notifications
import { notificationAsync } from 'expo-haptics';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import storage from 'redux-persist/lib/storage';
import { Platform } from 'react-native';

function App() {
    // loading state
    const [isLoading, setIsLoading] = useState(true)
    // get notifications permissions
    const getPermission = async () => {
        if(Constants.isDevice) {
            const {status: existingStatus} = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if(existingStatus === "granted") {
                const {status} = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if(finalStatus !== 'granted') {
                alert('Enable push notifications to use the app!');
                await storage.setIem("expopushtoken", "");
                return;
            }
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            await storage.setItem("expopushtoken", token);

        }else {
            alert('Notifications will not work on an emulator, please switch to a handle held device.')
        }

        if(Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: "defualt",
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: "#0B2B50"
            })
        }
    }
    
        return (
            <Provider store={store}>
                <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
                     <NavigationContainer>
                            {isLoading
                
                            ? (<SplashScreen/>)
                            
                            // : isAuth
                            
                                // ? (<AppStack/>)
                                : (<AuthStack/>)}
                        </NavigationContainer>
                </PersistGate>
            </Provider>
        );
    
}

export default App;