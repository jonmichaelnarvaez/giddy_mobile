import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';

// calendar
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})

function HomeScreen() {
  
  // test information
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
          <View style={{height: '50%', width: '100%', paddingTop: '5%'}}>
              <CalendarList 
              style={{
                height: 350
              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              markingType={'multi-dot'}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: 'transparent',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                // selectedDayBackgroundColor: '#00adf5',
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
                // textDayFontFamily: 'monospace',
                // textMonthFontFamily: 'monospace',
                // textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
              }}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={13}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={13}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                markedDates={{
                  '2022-06-16': {dots: [vacation, massage, workout], selected: true, marked: true, selectedColor: '#00adf5'},
                  '2022-07-17': {marked: true},
                  '2022-08-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                  '2022-09-19': {disabled: true, disableTouchEvent: true}
                }}/>
          </View>
    </SafeAreaView>
  );
}

export default HomeScreen;