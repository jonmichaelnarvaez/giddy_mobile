import { Image, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'


export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Image source={require("../../assets/splash/splash_screen.jpg")} style={{width: '100%', height: '100%'}} />
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