import {
    StyleSheet,
    Text,
    SafeAreaView,
    Dimensions,
    View,
    Animated,
    ScrollView
} from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../../components/Search/SearchBar'
import {} from 'react-native-gesture-handler'

const windowWidth = Dimensions
    .get('screen')
    .width

export default function SearchScreen() {
    const [scrollYValue,
        setScrollYValue] = useState(new Animated.Value(0))

    const clampedScroll = Animated.diffClamp(Animated.add(scrollYValue.interpolate({
        inputRange: [
            0, 1
        ],
        outputRange: [
            0, 1
        ],
        extrapolateLeft: 'clamp'
    }), new Animated.Value(0),), 0, 50,)

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar clampedScroll={clampedScroll}/>
            <Animated.ScrollView showsVerticalScrollIndicator={false}
          style={{
            margin: 20,
            backgroundColor: 'transparent',
            paddingTop: 55, 
            top: 50
          }}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
            { useNativeDriver: true },
            () => { },          // Optional async listener
          )}
          contentInsetAdjustmentBehavior="automatic">
                <Text>What are we searching here?!</Text>
            </Animated.ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: windowWidth,
        paddingTop: 150

        
    }
})