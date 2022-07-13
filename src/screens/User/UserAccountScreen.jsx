import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
    Pressable,
    Linking,
} from 'react-native'
// navigation
import {useNavigation} from '@react-navigation/native';
// react native paper
import {Divider} from 'react-native-paper';
// icons
import {EvilIcons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions
    .get("window")
    .width

export default function UserAccountScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* convert to dynamic data based on users tracker & information */}
            <ImageBackground
                source={require('../../assets/images/ed_header.png')}
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
                <Divider style={{backgroundColor: "transparent", paddingBottom: 20}}/>
                {/* Help Category */}
                <Text style={styles.categoryTitle}>Help</Text>
               <Pressable>
               <View style={styles.contentWrapper}>
                    <Text>Terms & Conditions</Text>
                    <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
               </Pressable>
               <Divider/>
               <Pressable>
               <View style={styles.contentWrapper}>
                    <Text>Privacy Policy</Text>
                    <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
               </Pressable>
               <Divider/>
               <Pressable>
               <View style={styles.contentWrapper}>
                    <Text>Cookie Policy</Text>
                    <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
               </Pressable>
               <Divider style={{backgroundColor: "transparent", paddingBottom: 20}}/>

                {/* Learn More */}
                <Text style={styles.categoryTitle}>Learn More</Text>
                <Pressable onPress={() => Linking.openURL('https://giddyhealth.com/')}>
                   <View style={styles.contentWrapper}>
                    <Text>Giddy + Health</Text>
                    <MaterialCommunityIcons name="pill" size={24} color="black" />
                    </View>
               </Pressable>
               <Divider/>
               <Pressable onPress={() => Linking.openURL('https://eddiebygiddy.com/')}>
               <View style={styles.contentWrapper}>
                    <Text>Eddie by Giddy</Text>
                    <EvilIcons name="link" size={24} color="black"/>
                    </View>
               </Pressable>
               <Divider/>
               <Divider style={{backgroundColor: 'transparent', paddingBottom: 110}}/>

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
        paddingBottom: 20,
        backgroundColor: '#161c45',
        opacity: 0.77
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