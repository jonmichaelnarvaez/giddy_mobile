import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    Pressable
} from 'react-native'
// react-native-paper
import {Switch, Divider} from 'react-native-paper'
// icons
import {EvilIcons} from '@expo/vector-icons';
// navigation
import {useNavigation} from '@react-navigation/native';
// storage
import AsyncStorage from '@react-native-async-storage/async-storage'

const windowWidth = Dimensions
    .get("window")
    .width

export default function PreferenceScreen() {

    // navigation hook
    const navigation = useNavigation();

    const readPreference = async() => {
        try {
            const asyncSexualHealth = await AsyncStorage.getItem("sexualHealthTracker");
            const asyncEdTracker = await AsyncStorage.getItem("EdTracker");
            const asyncFertilityTracker = await AsyncStorage.getItem("FertilityTracker");

            if (asyncSexualHealth !== null) {
                setIsSexualSwitchOn(JSON.parse(asyncSexualHealth));
            } else {
                setIsSexualSwitchOn(false);
            }

            if (asyncEdTracker !== null) {
                setIsEdSwitchOn(JSON.parse(asyncEdTracker));
            } else {
                setIsEdSwitchOn(false);
            }

            if (asyncFertilityTracker !== null) {
                setIsOvulationSwitchOn(JSON.parse(asyncFertilityTracker));
            } else {
                setIsOvulationSwitchOn(false);
            }

        } catch (e) {
            alert('Error: ' + e.message);
        }
    };

    const savePreferences = async(toggleType, toggleTypeState) => {
        try {
            await AsyncStorage.setItem(toggleType, JSON.stringify(toggleTypeState));
        } catch (e) {
            alert('Error: ' + e.message);
        }
    };

    useEffect(() => {
        readPreference();
    }, [])

    // select Ovulation tracker
    const [isOvulationSwitchOn,
        setIsOvulationSwitchOn] = useState();

    const onToggleOvulationSwitch = () => {
        setIsOvulationSwitchOn(!isOvulationSwitchOn);
        savePreferences('isOvulationSwitchOn', !isOvulationSwitchOn);
    };

    // select ed tracker
    const [isEdSwitchOn,
        setIsEdSwitchOn] = useState();

    const onToggleEdSwitch = () => {
        setIsEdSwitchOn(!isEdSwitchOn);
        savePreferences('isEdSwitchOn', !isEdSwitchOn);
    };

    // select sexual tracker
    const [isSexualSwitchOn,
        setIsSexualSwitchOn] = useState();

    const onToggleSexualSwitch = () => {
        setIsSexualSwitchOn(!isSexualSwitchOn);
        savePreferences('isSexualSwitchOn', !isSexualSwitchOn)
    };

    return (
        <ScrollView>
            <SafeAreaView>
                <Text style={styles.categoryTitle}>Select a Tracker</Text>
                <View style={styles.contentWrapper}>
                    <Text>Fertility Tracker</Text>
                    <Switch
                        onPress={() => null}
                        value={isOvulationSwitchOn}
                        onValueChange={(value) => onToggleOvulationSwitch(value)}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>ED Tracker</Text>
                    <Switch value={isEdSwitchOn} onValueChange={(value) => onToggleEdSwitch(value)}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>Sexual Health Tracker</Text>
                    <Switch value={isSexualSwitchOn} onValueChange={(value) => onToggleSexualSwitch(value)}/>
                </View>
                <Divider/>
                <Text style={styles.categoryTitle}>notifications</Text>
                <Pressable onPress={() => navigation.navigate('Sexual Notifications')}>
                    <View style={styles.contentWrapper}>
                        <Text>Sexual Health</Text>
                        <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
                </Pressable>
                <Divider/>
                <Pressable onPress={() => navigation.navigate('Period Ovulation')}>
                    <View style={styles.contentWrapper}>
                        <Text>Period & Ovulation</Text>
                        <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
                </Pressable>
                <Divider/>
                <Pressable onPress={() => navigation.navigate('EdNotifications')}>
                    <View style={styles.contentWrapper}>
                        <Text>Erectile Dysfunction</Text>
                        <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
                </Pressable>
                <Divider/>
                <Pressable onPress={() => navigation.navigate('Article Notifications')}>
                    <View style={styles.contentWrapper}>
                        <Text>Articles</Text>
                        <EvilIcons name="chevron-right" size={24} color="black"/>
                    </View>
                </Pressable>
                <Divider/>
            </SafeAreaView>
        </ScrollView>
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