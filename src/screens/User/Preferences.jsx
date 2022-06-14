import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native'
import React from 'react'
// react-native-paper
import {Switch, Divider} from 'react-native-paper'

const windowWidth = Dimensions
    .get("window")
    .width

export default function PreferenceScreen() {
     // toggle switches general -- need to change hooks to match switch
     const [isSwitchOn, setIsSwitchOn] = React.useState(false);
     const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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
                <View style={styles.contentWrapper}>
                    <Text>Notifications</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>New Articles</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
                </View>
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