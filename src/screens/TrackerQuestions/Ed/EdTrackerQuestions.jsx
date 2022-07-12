import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EdTrackerQuestions() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Are you a Veteran or Active Milliary?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})