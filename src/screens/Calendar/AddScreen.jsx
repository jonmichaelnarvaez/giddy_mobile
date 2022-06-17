import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text>New event details live here.</Text>
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