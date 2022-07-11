import React from 'react'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
// third party libraries
import {Divider} from 'react-native-paper'
import {Feather} from '@expo/vector-icons';

// TODO: create list of entry component and single entry components with user
// entry details

const windowWidth = Dimensions
    .get("window")
    .width

export default function EntryHistory() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text>
                    Entry #
                </Text>
                <Feather name="edit-2" size={24} color="black"/>
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Entry #
                </Text>
                <Feather name="edit-2" size={24} color="black"/>
            </View>
            <Divider/>
            <View style={styles.contentContainer}>
                <Text>
                    Entry #
                </Text>
                <Feather name="edit-2" size={24} color="black"/>
            </View>
            <Divider/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: "15%",
        justifyContent: 'space-between'
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
        padding: 15
    }
})