import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
// third party libraries
import {Button} from 'react-native-paper'




export default function PersonalInformation() {
  return (
    <View style={styles.container}>
      <Text>What do we want to update/change?</Text>
      <Button color="#c60000" mode="contained"  onPress={() => Alert.alert('Call deleteData from drupal backend')}>
        Delete your data
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '15%'
  },
})