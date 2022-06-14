import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// dummy data
import { POSTS } from "../../model/Articles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ArticleCard() {
  const navigation = useNavigation();

  const displayPosts = POSTS.map((post, index) => {
    return (
      <View key={post.id + index} style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Article Detail", { post })}
        >
          <ImageBackground
            source={{ uri: post.imageUrl }}
            resizeMode="cover"
            style={styles.imageBack}
          >
            <Text style={styles.category}>{post.category}</Text>
            <Text style={styles.title}>{post.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  });
  return <View style={styles.container}>{displayPosts}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
  card: {
    width: windowWidth,
    height: windowHeight / 3
  },
  imageBack: {
    flex: 1,
    height: 250,
  },
});
