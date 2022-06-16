import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Dimensions, TouchableHighlight, Image } from 'react-native'
// navigation
import {useNavigation} from "@react-navigation/native";

const windowWidth = Dimensions
    .get("window")
    .width;
const windowHeight = Dimensions
    .get("window")
    .height;

export default function ArticleCard() {
  
  const navigation = useNavigation();
  
  const displayPosts = POSTS.map((post) => {
    return (<FlatList
        initialNumToRender={10}
        refreshing={true}
        onRefresh={() => {
            <Spinner/>
        }}
        style={styles.card}
        data={POSTS}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
        <TouchableHighlight
            onPress={() => navigation.navigate('Article Detail', {post})}>
            <ImageBackground
                source={{
                uri: post.imageUrl
            }}
                style={styles.imageBack}
                resizeMode="cover">
                <View style={styles.contentContainer}>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>Written by: {item.author}</Text>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    )}/>);
});

  
  return (
    <View>
     {displayPosts}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: windowWidth,
        height: windowHeight
    },
    imageBack: {
        flex: 1,
        height: 250
    },
    contentContainer: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignContent: "flex-start",
        paddingLeft: 15
    },
    title: {
        color: "#000",
        textTransform: "uppercase",
        fontSize: 13
    },
    category: {
        color: '#00adf5',
        fontSize: 12
    },
    author: {
        color: "#ededed",
        size: 8
    }
})