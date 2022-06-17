import React, {useState} from "react";
import {Animated,View, StyleSheet, Text, Dimensions} from "react-native";
import SearchBar from "../../components/Search/SearchBar";

// dummy data
import {POSTS} from "../../model/Articles";

const windowWidth = Dimensions
    .get("window")
    .width;
const windowHeight = Dimensions
    .get("window")
    .height;

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
        <View style={styles.container}>
            <SearchBar clampedScroll={clampedScroll}/>
            <Text>Post go here.</Text>
        </View>
    );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});
