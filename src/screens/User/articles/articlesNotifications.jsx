import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    StyleSheet,
    SafeAreaView
} from 'react-native'
// react-native-paper
import {Switch, Divider} from 'react-native-paper'

const windowWidth = Dimensions
    .get("window")
    .width

export default function ArticlesNotifications() {
    // new articles
    const [newArticlesIsSwitchOn,
        setNewArticlesIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setNewArticlesIsSwitchOn(!newArticlesIsSwitchOn);
    // newsletters
    const [newsLetters,
        setNewsLetters] = useState(false);
    const onToggle = () => setNewsLetters(!newsLetters);

    return (
        <ScrollView>
            <SafeAreaView>
                <Text style={styles.categoryTitle}>Article Notifications</Text>
                <View style={styles.contentWrapper}>
                    <Text>New Articles</Text>
                    <Switch value={newArticlesIsSwitchOn} onValueChange={onToggleSwitch}/>
                </View>
                <Divider/>
                <View style={styles.contentWrapper}>
                    <Text>News Letters</Text>
                    <Switch value={newsLetters} onValueChange={onToggle}/>
                </View>
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