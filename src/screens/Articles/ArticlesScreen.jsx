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

const windowWidth = Dimensions
    .get("window")
    .width;
const ArticlesScreen = () => {
    const [scrollYValue,
        setScrollYValue] = useState(new Animated.Value(0))

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
        <View style={styles.container}>
            <View
                style={{
                top: '55%',
            }}>
                <CategoryList/>
            </View>
        </View>
        <View style={styles.postContainer}>
            <Text style={styles.posts}>Posts go here ...</Text>
        </View>
        </>
    );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth
    },
    postContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    posts: {
        justifyContent: 'center',
        alignItems :'center'
    },
});
