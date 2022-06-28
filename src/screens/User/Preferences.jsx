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

     // toggle switches general -- need to change hooks to match switch
     const [isSwitchOn, setIsSwitchOn] = useState(false);
     const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
     const navigation = useNavigation();

    return (
        <ScrollView>
           <SafeAreaView>
           <Text style={styles.categoryTitle}>Select a Tracker</Text>
                <View style={styles.contentWrapper}>
                    <Text>Ovulation & Pregnancy Tracker</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>ED Tracker</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>Sexual Health Tracker</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
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