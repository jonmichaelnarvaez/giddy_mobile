import React from 'react';
import {Animated, StyleSheet, TextInput, Dimensions} from 'react-native'
// third party libraries

const windowWidth = Dimensions.get("window").width

const SearchBar = (props) => {
    const [searchQuery,
        setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    
    return (
        <Animated.View
            style={[
            styles.container, 
        ]}>
            <TextInput onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}  placeholder="Search" style={styles.formField} placeholderTextColor={'#d6d6d7'}/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
  container: {
    bottom: 40,
    width: windowWidth - 40,
    left: 20,
    backgroundColor: 'transparent'
  },
  formField: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, .95)',
    fontSize: 16,
    height: 40,
  }
})

export default SearchBar;