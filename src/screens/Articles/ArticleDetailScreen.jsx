import React from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    View,
    ScrollView
} from "react-native";

export default function ArticleDetailScreen({route}) {  

    return (
        <SafeAreaView key={route.params.id} style={styles.container}>
            <ImageBackground
                source={{
                uri: route.params.imageUrl
            }}
                style={styles.image}
                resizeMode="cover">
                <View
                    style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <Text style={title}>{route.params.title}</Text>
                    <Text style={author}>Written by: {route.params.author}</Text>
                </View>
            </ImageBackground>
            <ScrollView style={{
                padding: 12
            }}>
                <Text style={styles.text}>
                    {route.params.copy}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignpostss: "flex-start"
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
        alignpostss: "center",
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
