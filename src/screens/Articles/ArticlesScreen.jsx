import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";
// dummy data
import {POSTS} from "../../model/Articles";
// navigation
import {useNavigation} from "@react-navigation/native";

const windowWidth = Dimensions
    .get("window")
    .width;
const windowHeight = Dimensions
    .get("window")
    .height;

const ArticlesScreen = () => {

    const navigation = useNavigation();

    const displayPosts = POSTS.map((post, index) => {
        return (
            <View key={post.id + index} style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate("Article Detail", {post})}>
                    <ImageBackground
                        source={{
                        uri: post.imageUrl
                    }}
                        resizeMode="cover"
                        style={styles.imageBack}>
                        <Text style={styles.category}>{post.category}</Text>
                        <Text style={styles.title}>{post.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    });

    return <ScrollView style={styles.container}>{displayPosts}</ScrollView>;
};

export default ArticlesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight
    },
    card: {
        width: windowWidth,
        height: windowHeight / 3
    },
    imageBack: {
        flex: 1,
        height: 250
    }
});
