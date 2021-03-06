import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Pressable,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
// icons
import {Feather} from "@expo/vector-icons"
import { Octicons } from '@expo/vector-icons';
// calendar
import {CalendarList} from 'react-native-calendars';
// navigation
import { useNavigation } from '@react-navigation/native';
// push notifications-android
import PushNotification from 'react-native-push-notification';

const getCorrectDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(23);
    date.setMinutes(54);
    return date;
  };
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
  

const handleNotifications = (item, index) => {
    // clear old notifications as new one come in android
    PushNotification.cancelAllLocalNotifications();
    //clear old notifications as new one come in iOS
    PushNotificationIOS.removeAllDeliveredNotifications();
    
    // for testing purposes only
    PushNotification.localNotification({
        id: index,
        channelId: "test-channel",
        title: "test-title",
        message: "test-message",
        repeatType: 'day',
        bigText: "this is a continued sentence for test purposes.",
        color: "#161c45"
    });
    // local notifications for iOS
    PushNotificationIOS.presentLocalNotification({
        id: index,
        alertTitle: 'This is the test title',
        alertBody: 'This is an iOS notification test',

    });

    PushNotification.localNotificationSchedule({
        channelId: "test-channel",
        title: 'test-title-scheduled',
        message: "test-message-scheduled",
        // will show 20 seconds after pushed - outside of app.
        date: new Date(Date.now() + 20 * 1000),
        allowWhileIdle: true,
    });
    
    PushNotificationIOS.scheduleLocalNotification({
        fireDate: getCorrectDate(),
        alertTitle: "Did you log today activities?",
        alertBody: "This is a test message",
        repeatInterval: 'day'
    });
    // Gets the current badge number for the app icon on the home screen
    PushNotificationIOS.getApplicationIconBadgeNumber(() => {});
};

const windowWidth = Dimensions
    .get('window')
    .width;


function HomeScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <ScrollView>
                <View
                    style={{
                    height: '50%',
                    width: '100%',
                
                }}>
                    <CalendarList
                        horizontal={true}
                        markingType={'period'}
                        theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: 'transparent',
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayTextColor: '#c60000',
                        todayTextColor: '#aad0f8',
                        dayTextColor: '#161c45',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#aad0f8',
                        selectedDotColor: '#aad0f8',
                        arrowColor: 'orange',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: '#aad0f8',
                        indicatorColor: '#161c45',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                        onVisibleMonthsChange={(months) => {
                        console.log('now these months are visible', months);
                    }}
                        pastScrollRange={13}
                        futureScrollRange={13}
                        scrollEnabled={true}
                        showScrollIndicator={false}
                        markedDates={{
                            '2022-06-04': {disabled: true, startingDay: true, color: '#BCE6E9', endingDay: true, textColor: "#ededed"}
                          }}/>
                </View>
                <TouchableOpacity onPress={handleNotifications}>
                <Text style={styles.today}>Today</Text>
                </TouchableOpacity>
                <View>
                <View style={styles.contentContainer}>
                    <Text style={{fontWeight: '200'}}>Create your first event </Text>
                    <Pressable onPress={() => navigation.navigate('New Event')}>
                    <View style={styles.addEvent}>
                        <Feather name="plus" color="#BCE6E9" size={20}/>
                    </View>
                    </Pressable>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={{fontWeight: '200'}}>Entry History</Text>
                    <Pressable onPress={() => navigation.navigate('Entry History')}>
                    <View style={styles.addEvent}>
                    <Octicons name="history" size={20} color="#BCE6E9" />
                    </View>
                    </Pressable>
                </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
  },
  contentContainer: {
    flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, .45)',
      height: 100,
      width: windowWidth,
      marginTop: 20,
      padding: 20,
      borderRadius: 20,
      shadowColor: '#777',
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
      
  },
  addEvent: {
      backgroundColor: "#0B2B50",
      height: 35,
      width: 35,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
  },
  today: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 25,
      paddingTop: "5%",
      paddingLeft: 25
  },
  

})