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
import ArticlesList from "../../components/Analytics/Articles";

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
        <SearchBar clampedScroll={clampedScroll}/>
        <View style={styles.postContainer}>
            <CategoryList/>
            <ArticlesList/>
        </View>
        </>
    );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: windowWidth
    },
    postContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '45%'
    },
    posts: {
        justifyContent: 'center',
        alignItems :'center',
    },
});
