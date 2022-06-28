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

const windowWidth = Dimensions
    .get("window")
    .width;
const ArticlesScreen = () => {
    const [scrollYValue,
        setScrollYValue] = useState(new Animated.Value(0));

    const clampedScroll = Animated.diffClamp(Animated.add(scrollYValue.interpolate({
        inputRange: [
            0, 1
        ],
        outputRange: [
            0, 1
        ],
        extrapolateLeft: 'clamp'
    }), new Animated.Value(0),), 0, 50,)

    return (
        <>
    
        <View style={styles.postContainer}>
            <ArticlesList/>
        </View>
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
