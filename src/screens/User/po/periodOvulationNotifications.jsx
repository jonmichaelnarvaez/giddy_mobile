import React, {useState} from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
//react-native-paper
import { Switch, Divider } from 'react-native-paper'

const windowWidth = Dimensions
    .get("window")
    .width

export default function PeriodOvulationNotifications() {
  
  // period predictions
  const [periodPredictions, setPeriodPredictions] = useState(false);
  const togglePeriodPredictions = () => setPeriodPredictions(!periodPredictions);
  // period notifications
  const [periodNotifications, setPeriodNotifications] = useState(false);
  const togglePeriodNotifications = () => setPeriodNotifications(!periodNotifications);
  // fertility predictions
  const [fertilityPredictions, setFertilityPredictions] = useState(false);
  const toggleFertilityPredictions = () => setFertilityPredictions(!fertilityPredictions);


  return (
    <SafeAreaView>
      <Text style={styles.categoryTitle}>Period & Ovulation Notifications</Text>
      <View style={styles.contentWrapper}>
        <Text>Period Predications</Text>
        <Switch value={periodPredictions} onValueChange={togglePeriodPredictions}/>
      </View>
      <Divider/>
      <View style={styles.contentWrapper}>
        <Text>Period Notification</Text>
        <Switch value={periodNotifications} onValueChange={togglePeriodNotifications}/>
      </View>
      <Divider/>
      <View style={styles.contentWrapper}>
        <Text>Fertility Predictions</Text>
        <Switch value={fertilityPredictions} onValueChange={toggleFertilityPredictions}/>
      </View>
      <Divider/>
      <View style={styles.contentWrapper}>
        <Text>Fertility Notifications</Text>
        <Switch/>
      </View>
      <Divider/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      width: windowWidth,
      padding: 15
  },
  categoryTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      paddingTop: 15,
      paddingLeft: 15
  }
})