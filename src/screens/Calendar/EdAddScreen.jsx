import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
// third party libraries
import {Button, Divider} from 'react-native-paper'
import {Fontisto} from '@expo/vector-icons'

const windowWidth = Dimensions.get("window").width

export default function EdAddScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.contentContainer}>
        <Text>
            Daily Erection
        </Text>
        {/* boolean value */}
        <Fontisto name="intersex" size={24} color="black" />
    </View>
    <Divider/>

    <Button style={{margin: 20}} mode='contained' color="#161c45">Submit </Button>
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: "15%",
        justifyContent: 'space-between',
        
        
    },
    contentContainer: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      width: windowWidth,
      padding: 15
    }
})