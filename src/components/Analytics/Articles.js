import React, {useState} from 'react'
import {  Text, View, FlatList, Image, StyleSheet, SafeAreaView, Animated} from 'react-native';
import { Button } from 'react-native-paper';

// temp data
import { POSTS } from '../../model/Articles'

const Item = ({uri: imageUrl, category, title, author}) => (
  <View style={styles.articlesWrapper} >
    <Image resizeMode='cover' source={imageUrl} style={{width: 150, height: 150}}/>
    <Text numberOfLines={2} style={{fontWeight: 'bold', textTransform: 'uppercase', fontSize: 14}}>{title}</Text>
    <Text style={styles.category}>{category}</Text>
    <Text style={styles.author}>{author}</Text>
    
  </View>
);

const renderItem = ({item}) => (
  <Item imageUrl={{url: item.imageUrl}} category={item.category} title={item.title} author={item.author}/>
)

export default function ArticlesList() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  return (
    <FlatList
    data={POSTS}
    keyExtractor={item => item.id}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    
    />

  )
}


const styles = StyleSheet.create({
  category: {
    color: "#aad0f8",
    paddingTop: 10,
    paddingBottom: 10,
  },
  author: {
    color: "#9d9d9d"
  },
  articlesWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 150
  },
});