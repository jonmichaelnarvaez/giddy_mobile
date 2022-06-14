import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Onboarding</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    }
})