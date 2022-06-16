import {
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    Button,
    View,
    ScrollView
} from "react-native";
import React from "react";

export default function ArticleDetailScreen({route}) {

    const {post} = route.params;

    return (
        <SafeAreaView key={post.id} style={styles.container}>
            <ImageBackground
                source={{
                uri: post.imageUrl
            }}
                style={styles.image}
                resizeMode="cover">
                <View
                    style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.author}>Written by: {post.author}</Text>
                </View>
            </ImageBackground>
            <ScrollView style={{
                padding: 12
            }}>
                <Text style={styles.text}>
                    {post.copy}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    image: {
        width: 400,
        height: 250
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",

        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
    },
    text: {
        fontSize: 10,
        fontWeight: "200",
        lineHeight: 20
    },
    author: {
        color: '#fff'
    }
});
