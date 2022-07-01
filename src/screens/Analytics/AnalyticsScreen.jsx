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

const windowWidth = Dimensions.get("window").width;

const DATA = {
  labels: [],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: () => '#aad0f8', // optional
    }
  ],
  legend: []
};

const chartConfig = {
  backgroundGradientFrom: "#ffff",
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
      <SafeAreaView>
        <View style={styles.container}>
          <LineChart
          data={DATA}
          width={windowWidth}
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
      marginTop: '5%',
      width: windowWidth / 2
    },
  });