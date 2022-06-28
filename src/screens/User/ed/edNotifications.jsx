import React, {useState} from 'react'
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
// react-native paper
import {Switch, Divider} from 'react-native-paper';
import { set } from 'react-native-reanimated';


const windowWidth = Dimensions
    .get("window")
    .width

export default function EdNotifications() {
  // sexual optimizer
  const [optimizer, setOptimizer] = useState(false);
  const onToggle = () => setOptimizer(!optimizer);

  return (
    <SafeAreaView>
      <Text style={styles.categoryTitle}>ED Notifications</Text>
      <View style={styles.contentWrapper}>
        <Text>Sexual Optimizer</Text>
        <Switch value={optimizer} onValueChange={onToggle}/>
      </View>
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