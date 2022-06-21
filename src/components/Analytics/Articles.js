import React, {useState} from 'react'
import {
    Text,
    View,
    FlatList,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import {Button} from 'react-native-paper';
// temp data
import {POSTS} from '../../model/Articles'

const windowWidth = Dimensions
    .get('window')
    .width

const Item = ({imageUrl, category, title, author}) => (
    <View style={styles.articlesWrapper}>
        <Image
            resizeMode='cover'
            source={imageUrl}
            style={{
            width: windowWidth,
            height: 250
        }}/>
        <View style={{paddingLeft: 10}}>
            <Text style={styles.category}>{category}</Text>
            <Text
                numberOfLines={2}
                style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: 14
            }}>{title}</Text>
        </View>
      
    </View>
);

const renderItem = ({item}) => (<Item
    imageUrl={{
    url: item.imageUrl
}}
    category={item.category}
    title={item.title}
    author={item.author}/>)

export default function ArticlesList() {

    return (<FlatList
        data={POSTS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}/>)
}

const styles = StyleSheet.create({
    category: {
        color: "#aad0f8",
        paddingTop: 10,
        paddingBottom: 10
    },
    author: {
        color: "#9d9d9d"
    },
    articlesWrapper: {
        marginBottom: 25,
        marginLeft: -10
        
    }
});