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
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
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
        backgroundColor: '#0B2B50',
        padding: 15,
        marginHorizontal: 8,
        height: 50,
        width: 140,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    title: {
        fontSize: 12,
        color: '#ededed',
        textAlign: 'center'
    }
})