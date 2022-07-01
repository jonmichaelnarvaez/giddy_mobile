import React, {useState} from "react";
import {
    Animated,
    View,
    StyleSheet,
    Text,
    Dimensions,
    ScrollView
} from "react-native";
import SearchBar from "../../components/Search/SearchBar";
// dummy data
import {POSTS} from "../../model/Articles";
// custom components
import CategoryList from "../../components/Article/CategoryList";
import ArticlesList from "../../components/Article/Articles";
import { ZoomInUp, Layout, ZoomOut } from "react-native-reanimated";

const windowWidth = Dimensions
    .get("window")
    .width;
    
const ArticlesScreen = () => {
    return (
        <>
        <Animated.View entering={ZoomInUp} exiting={ZoomOut} layout={Layout.delay(200)}  style={styles.postContainer}>
            <ArticlesList/>
        </Animated.View>
        </>
    );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
    container: {
        width: windowWidth
    },
    postContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '40%'
    },
    posts: {
        justifyContent: 'center',
        alignItems :'center',
    },
});
