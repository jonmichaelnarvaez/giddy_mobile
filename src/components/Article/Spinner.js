import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Spinner() {
  return (
    <View>
      <Text style={styles.loading}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
    },
})