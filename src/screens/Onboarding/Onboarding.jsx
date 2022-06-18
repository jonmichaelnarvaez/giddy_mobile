import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function OnboardingScreen() {

  const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Onboarding</Text>
            <Button
                onPress={() => navigation.navigate("Authenticate")}
                mode="contained"
                style={{
                backgroundColor: "#aad0f8",
                margin: 20
            }}>Sign-In / Register</Button>
            <Button
                onPress={() => navigation.navigate("Password")}
                mode="contained"
                style={{
                backgroundColor: "#161c45",
                margin: 20
            }}>Pass code</Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})