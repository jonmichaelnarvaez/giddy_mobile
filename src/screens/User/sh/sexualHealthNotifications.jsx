import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
//react-native-paper
import {Switch, Divider} from 'react-native-paper';

const windowWidth = Dimensions
    .get("window")
    .width

export default function SexualHealthNotifications() {
    // partner notification
    const [partnerNotifications,
        setPartnerNotifications] = useState(false);
    const togglePartnerNotifications = () => setPartnerNotifications(!partnerNotifications);
    // new analytics
    const [analytics,
        setAnalytics] = useState(false);
    const toggleAnalytics = () => setAnalytics(!analytics);

    return (
        <SafeAreaView>
            <Text style={styles.categoryTitle}>Sexual Health Notifications</Text>
            <View style={styles.contentWrapper}>
                <Text>Partner Notifications</Text>
                <Switch
                    value={partnerNotifications}
                    onValueChange={togglePartnerNotifications}/>
            </View>
            <Divider/>
            <View style={styles.contentWrapper}>
                <Text>New Analytics</Text>
                <Switch value={analytics} onValueChange={toggleAnalytics}/>
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