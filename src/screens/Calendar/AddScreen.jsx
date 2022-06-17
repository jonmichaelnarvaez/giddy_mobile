import {StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'
// third party libraries
import { Fontisto } from '@expo/vector-icons';
import { Button, Divider } from 'react-native-paper'

const windowWidth = Dimensions.get('window').width

export default function AddScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text>
                    Activity
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Partners
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Protection
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Duration
                </Text>
                <Fontisto name="intersex" size={24} color="black" />
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Initiated by
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