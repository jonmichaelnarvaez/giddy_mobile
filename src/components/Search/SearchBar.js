import React from 'react';
import {Animated, StyleSheet, TextInput, Dimensions} from 'react-native'
// third party libraries

const windowWidth = Dimensions.get("window").width

const SearchBar = (props) => {
    const [searchQuery,
        setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    
    // animation
    const {clampedScroll} = props;
    
    const searBarTranslate = clampedScroll.interpolate({
        inputRange: [
            0, 50
        ],
        outputRange: [
            0, -(250)
        ],
        extrapolate: 'clamp'
    });

    const searchBarOpacity = clampedScroll.interpolate({
        inputRange: [
            0, 10
        ],
        outputRange: [
            1, 0
        ],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View
            style={[
            styles.container, {
                transform: [
                    {
                        translateY: searBarTranslate
                    }
                ],
                opacity: searchBarOpacity
            }
        ]}>
            <TextInput onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}  placeholder="Search" style={styles.formField} placeholderTextColor={'#d6d6d7'}/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    width: windowWidth - 40,
    left: 20,
    zIndex: 99,
    backgroundColor: 'transparent'
  },
  formField: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    borderColor: '#888888',
    fontSize: 18,
    height: 50,
  }
})

export default SearchBar;