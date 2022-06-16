import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    StyleSheet,
    Text,
    
    Dimensions,
    Pressable,
    
} from 'react-native';
// icons
import {Feather} from "@expo/vector-icons"
// calendar
import {CalendarList} from 'react-native-calendars';
// navigation
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions
    .get('window')
    .width;


function HomeScreen() {

    const navigation = useNavigation();

    // test information
    const vacation = {
        key: 'vacation',
        color: 'red',
        selectedDotColor: 'blue'
    };
    const massage = {
        key: 'massage',
        color: 'blue',
        selectedDotColor: 'blue'
    };
    const workout = {
        key: 'workout',
        color: 'green'
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <View>
                <View
                    style={{
                    height: '50%',
                    width: '100%'
                }}>
                    <CalendarList
                        horizontal={true}
                        style={{
                        height: 350
                    }}
                        markingType={'multi-dot'}
                        theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: 'transparent',
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#161c45',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: '#161c45',
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
                        '2022-06-16': {
                            dots: [
                                vacation, massage, workout
                            ],
                            selected: true,
                            marked: true,
                            selectedColor: '#00adf5'
                        },
                        '2022-07-17': {
                            marked: true
                        },
                        '2022-08-18': {
                            marked: true,
                            dotColor: 'red',
                            activeOpacity: 0
                        },
                        '2022-09-19': {
                            disabled: true,
                            disableTouchEvent: true
                        }
                    }}/>
                </View>
                <Text style={styles.today}>Today</Text>
                <View style={styles.contentContainer}>
                    <Text>Add your first event! </Text>
                    <Pressable onPress={() => navigation.navigate('New Event')}>
                    <View style={styles.addEvent}>
                        <Feather name="plus" color="#ededed" size={20}/>
                    </View>
                    </Pressable>
                </View>
            </View>

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
      backgroundColor: 'rgba(255, 255, 255, 01)',
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
      backgroundColor: "#161c45",
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
      paddingTop: "13%",
      paddingLeft: 25
  },
  

})