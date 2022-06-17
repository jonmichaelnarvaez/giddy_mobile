import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';



const AnalyticsScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text></Text>
      </SafeAreaView>
    );
  };

  

  export default AnalyticsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: '25%',
      marginLeft: "5%"
    },
  });