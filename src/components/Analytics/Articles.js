import React, {useState} from 'react'
import {
    Text,
    View,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
    Pressable,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
// third party libraries
import {useNavigation} from '@react-navigation/native';
// temp data
import {POSTS} from '../../model/Articles'

const windowWidth = Dimensions.get('window').width
    
export default function ArticlesList() {
  const navigation = useNavigation();
    
  const handlePress = ({posts}) => {
    navigation.navigate('Article Detail', {posts});
  };
  
    const [refreshing,
        setRefreshing] = useState(false)

    const handleRefresh = () => {
        setRefreshing(prevState => !prevState)
    }

    const Header = () => {
      return (
          <View style={styles.header}>
              <Text numberOfLines={2} style={styles.headerText}>What's New</Text>
          </View>
      )
  };

  const Footer = () => {
      return (
          <View style={styles.footer}>
              <Text style={styles.footerText}>Loading...</Text>
          </View>
      );
  };
  
  const renderItem = ({item}) => {
    
     return (
          <Item
         
          imageUrl={{
          url: item.imageUrl}}
          category={item.category}
          title={item.title}
          leadingSentence={item.leadingSentence}/>
    
     )
  };

  const Item = ({imageUrl, category, title, leadingSentence}) => (
    <Pressable onPress={handlePress}>
    <View style={styles.articlesWrapper}>
        <Image
            resizeMode='cover'
            source={imageUrl}
            style={{
            width: windowWidth - 5,
            height: 250
        }}/>
        <Text style={styles.category}>{category}</Text>
        <Text
            numberOfLines={2}
            style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 18
        }}>{title}</Text>
        <Text style={styles.leadingSentence}>{leadingSentence}</Text>
    </View>
    </Pressable>

);

    return (
        <SafeAreaView>
            {/* <Header/> */}
            <FlatList
            data={POSTS}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onRefresh={handleRefresh}            
            initialNumToRender={10}
            ItemSeparatorComponent={Platform.OS !== 'android' && (({highlighted}) => (<View style={styles.separator}/>))}
            ListHeaderComponent={Header}
            ListFooterComponent={Footer}
            />
            {/* <Footer/> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    category: {
        color: "#aad0f8",
        paddingTop: 5,
        paddingBottom: 8
    },
    leadingSentence: {
        color: "#9d9d9d",
        paddingTop: 5,
        paddingBottom: 8
    },
    separator: {
        height: 50,
        width: "100%",
        backgroundColor: '#ededed'
    },
    header: {
        width: windowWidth,
        height: 45,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        paddingLeft: 8
    },
    headerText: {
        color: '#161c45',
        fontSize: 35,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    footer: {
        backgroundColor: 'white',
        width: windowWidth,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0
    },
    footerText: {
        color: '#000',
        fontSize: 18
    }
});