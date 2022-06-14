import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function AuthenticateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Authenticate</Text>
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