import { StyleSheet, Text, SafeAreaView, Dimensions, View } from 'react-native'
import React from 'react'
import SearchBar from '../../components/Search/SearchBar'


const windowWidth = Dimensions.get('screen').width

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar/>
      </View>
      <View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        width: windowWidth
    },
    searchWrapper: {
      paddingTop: '5%',
      width: windowWidth / 1.1
    },
})