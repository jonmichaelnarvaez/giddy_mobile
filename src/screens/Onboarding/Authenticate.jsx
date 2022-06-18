import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

export default function AuthenticateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image style={{width: 250, height: 350}} source={require("../../assets/logos/Giddy_blue.png")} resizeMode="center"/>
      </View>
      <View style={styles.bottomView}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    topView: {
      width: "100%",
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomView: {
      width: "100%",
      height: '70%',
      backgroundColor: "#161c45",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
})