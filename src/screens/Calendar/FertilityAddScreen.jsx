import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
// third party libraries
import {Button, Divider} from 'react-native-paper';
import { Fontisto} from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width
export default function FertilityAddScreen() {
  return (
    <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text>
                    Last Period
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Was your flow heavy or light?
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Fatigue or soreness 
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Mood
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Symptoms 
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Orgasm
                </Text>
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