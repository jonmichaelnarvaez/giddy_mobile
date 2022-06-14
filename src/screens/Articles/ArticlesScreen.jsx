import React from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
// components
import ArticleCard from "../../components/Articles/ArticleCard";

const ArticlesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ArticleCard />
    </ScrollView>
  );
};

export default ArticlesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
});
