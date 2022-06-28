import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text>List of favorite articles go here...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    }
})