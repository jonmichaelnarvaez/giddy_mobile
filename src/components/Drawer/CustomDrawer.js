import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Linking, StatusBar, Image } from 'react-native'
// navigation
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
        <StatusBar hidden/>
        <ImageBackground>
            <Image/>
            <Text>Hey there...</Text>
        </ImageBackground>
        <View>
            <DrawerItemList {...props}/>
        </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({})