import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
    Pressable
} from 'react-native'
// navigation
import {useNavigation} from '@react-navigation/native';
// react native paper
import {Divider} from 'react-native-paper';
// icons
import {EvilIcons} from '@expo/vector-icons';

const windowWidth = Dimensions
    .get("window")
    .width

export default function UserAccountScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/account.jpg')}
                style={styles.imageWrapper}
                resizeMode="cover">
                <Text style={styles.imageText}>Hey, JM</Text>
            </ImageBackground>
            <ScrollView>
                <Text style={styles.categoryTitle}>Account</Text>

                <Pressable onPress={() => navigation.navigate('Personal Info')}>
                    <View style={styles.contentWrapper}>
                        <Text>Personal Information</Text>
                        <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
                </Pressable>

                <Divider/>
                <Pressable onPress={() => navigation.navigate('Preferences')}>
                    <View style={styles.contentWrapper}>
                        <Text>Preferences</Text>
                        <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
                </Pressable>
                <Divider/>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imageText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    imageWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        width: windowWidth,
        height: 200,
        paddingLeft: 20,
        paddingBottom: 20
    },
    contentWrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
        padding: 15
    },
    categoryTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingTop: 15,
        paddingLeft: 15
    }
})