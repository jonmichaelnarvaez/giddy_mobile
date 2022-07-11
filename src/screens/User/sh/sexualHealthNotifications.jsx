import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
//react-native-paper
import {Switch, Divider} from 'react-native-paper';
// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions
    .get("window")
    .width

export default function SexualHealthNotifications() {

    const readPreference = async () => {
        try {
            const asyncPartnerNotifications = await AsyncStorage.getItem('partnerNotifications');
            const asyncDailyNotifications = await AsyncStorage.getItem('dailyNotifications');

            if(asyncPartnerNotifications !== null) {
                partnerNotifications(JSON.parse(asyncPartnerNotifications));
            } else {
                setPartnerNotifications(false);
            }

            if(asyncDailyNotifications !== null) {
                dailyNotifications(JSON.parse(asyncDailyNotifications));
            } else { 
                setDailyNotifications(false);
            }

        } catch (e) {
            alert('Error: ' + e.message);
            
        }
    };

    const savePreferences = async (toggleType, toggleTypeState) => {
        try {
            await AsyncStorage.setItem(toggleType, JSON.stringify(toggleTypeState));
        } catch (e) {
            alert('Error: ' + e.message);
        }
    };

    useEffect(() => {
        readPreference();
    }, [])


    // partner notification
    const [partnerNotifications,
        setPartnerNotifications] = useState(false);

    // toggle switch for partner notifications
    const togglePartnerNotifications = () => {
    setPartnerNotifications(!partnerNotifications);
    savePreferences('partnerNotifications', !partnerNotifications);    
    }

    // new analytics
    const [dailyNotifications,
        setDailyNotifications] = useState(false);

    const toggleDailyNotifications = () => {
    setDailyNotifications(!dailyNotifications);
    savePreferences('dailyNotifications', !dailyNotifications);
    };  
    
    return (
        <SafeAreaView>
            <Text style={styles.categoryTitle}>Sexual Health Notifications</Text>
            <View style={styles.contentWrapper}>
                <Text>Daily Reminders</Text>
                <Switch
                    value={partnerNotifications}
                    onValueChange={(value) => togglePartnerNotifications(value)}
                    />
            </View>
            <Divider/>
            <View style={styles.contentWrapper}>
                <Text>Partner Updates</Text>
                <Switch 
                value={dailyNotifications}
                onValueChange={(value) => toggleDailyNotifications(value)}/>
            </View>
            <Divider/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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