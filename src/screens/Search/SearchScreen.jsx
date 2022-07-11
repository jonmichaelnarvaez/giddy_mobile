import {StyleSheet, Text, SafeAreaView, Dimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {Searchbar} from 'react-native-paper';

const windowWidth = Dimensions
    .get('screen')
    .width

export default function SearchScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeHolder="Search here..."
                style={{
                borderWidth: 1,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 10,
                borderColor: 'rgba(255, 255, 255, .95)',
                fontSize: 16,
                height: 40,
                backgroundColor: 'rgba(255, 255, 255, .15)', 
                width: windowWidth - 40,
                left: 20
            }}/>
            <ScrollView
                style={styles.searchResults}>
                <Text>What are we searching here?!</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth
    },
    searchResults: {
        left: "25%",
        top: '15%'
    }
})