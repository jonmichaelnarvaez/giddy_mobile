import {StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'

const category = [
    {
        id: 1,
        title: 'Mens Health'
    }, {
        id: 2,
        title: 'Womans Health'
    }, {
        id: 3,
        title: 'Cancer'
    }, {
        id: 4,
        title: "Sexual Health"
    }
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function CategoryList() {

    const renderItem = ({item}) => (<Item title={item.title}/>);

    return <FlatList
        horizontal={true}
        renderItem={renderItem}
        data={category}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}/>
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#777',
        padding: 5,
        marginHorizontal: 14,
        height: 50,
        width: 80,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#ededed',
        textAlign: 'center'
    }
})