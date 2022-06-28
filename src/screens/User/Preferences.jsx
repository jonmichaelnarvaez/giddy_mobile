import React, {useState} from 'react'
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
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions
    .get("window")
    .width

export default function PreferenceScreen() {
    // navigation hook
    const navigation = useNavigation();
     // select Ovulation tracker
     const [isOvulationSwitchOn, setIsOvulationSwitchOn] = useState(false);
     const onToggleOvulationSwitch = () => setIsOvulationSwitchOn(!isOvulationSwitchOn);

     // select ed tracker 
     const [isEdSwitchOn, setIsEdSwitchOn] = useState(false);
     const onToggleEdSwitch = () => setIsEdSwitchOn(!isEdSwitchOn);

     // select sexual tracker
     const [isSexualSwitchOn, setIsSexualSwitchOn] = useState(false);
     const onToggleSexualSwitch = () => setIsSexualSwitchOn(!isSexualSwitchOn);

    return (
        <ScrollView>
           <SafeAreaView>
           <Text style={styles.categoryTitle}>Select a Tracker</Text>
                <View style={styles.contentWrapper}>
                    <Text>Ovulation & Pregnancy Tracker</Text>
                    <Switch onPress={() => null} value={isOvulationSwitchOn} onValueChange={onToggleOvulationSwitch}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>ED Tracker</Text>
                    <Switch value={isEdSwitchOn} onValueChange={onToggleEdSwitch}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>Sexual Health Tracker</Text>
                    <Switch value={isSexualSwitchOn} onValueChange={onToggleSexualSwitch}/>
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