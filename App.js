import React, {Component, useState} from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// app stack
import AppStack from './src/navigation/AppNavigator'
import AuthStack from './src/navigation/AuthNavigator';
import SplashScreen from "./src/components/Splash/SplashScreen";
// redux
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';


function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [permissions, setPermissions] = useState({});

    /**
     * By calling this function, notification with category `userAction` will have action buttons
     */
    const setNotificationCategories = () => {
      PushNotificationIOS.setNotificationCategories([
        {
          id: 'userAction',
          actions: [
            {id: 'open', title: 'Open', options: {foreground: true}},
            {
              id: 'ignore',
              title: 'Desruptive',
              options: {foreground: true, destructive: true},
            },
            {
              id: 'text',
              title: 'Text Input',
              options: {foreground: true},
              textInput: {buttonTitle: 'Send'},
            },
          ],
        },
      ]);
    };
  
    useEffect(() => {
      const type = 'notification';
      PushNotificationIOS.addEventListener(type, onRemoteNotification);
      return () => {
        PushNotificationIOS.removeEventListener(type);
      };
    });
    const onRemoteNotification = (notification) => {
        const actionIdentifier = notification.getActionIdentifier();
    
        if (actionIdentifier === 'open') {
          // Perform action based on open action
        }
    
        if (actionIdentifier === 'text') {
          // Text that of user input.
          const userText = notification.getUserText();
          // Perform action based on textinput action
        }
      };
    };
    
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
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