import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("screen").width;

const progressData = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};

const DATA = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: () => '#aa0000', // optional
    }
  ],
  legend: ["Your Progress"]
};

const chartConfig = {
  backgroundGradientFrom: "#ededed",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#ededed",
  backgroundGradientToOpacity: 1,
  color: () => '#444',
  barPercentage: 2,
  useShadowColorFromDataset: true,
  getDotColor: () => `#161c45`
  
};

const AnalyticsScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <LineChart
          data={DATA}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig} 
          bezier
          />
        </View>
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
    },
  });