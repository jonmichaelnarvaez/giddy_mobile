import React from "react";
import {View, StyleSheet, Text, Dimensions} from "react-native";
// dummy data
import {POSTS} from "../../model/Articles";

const windowWidth = Dimensions
    .get("window")
    .width;
const windowHeight = Dimensions
    .get("window")
    .height;

const ArticlesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Post go here.</Text>
        </View>
    );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        paddingTop: '15%'
    }
});
