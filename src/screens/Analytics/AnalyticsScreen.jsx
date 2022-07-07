import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import {Divider} from 'react-native-paper';

const windowWidth = Dimensions
    .get("window")
    .width;

const DATA = {
    labels: [],
    datasets: [
        {
            data: [
                20,
                45,
                28,
                80,
                99,
                43
            ],
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
                    bezier/>
            </View>
            <ScrollView style={{height: '100%'}}>
                <View style={styles.contentWrapper}>
                    <Text>Analytics</Text>
                    <Text>1234</Text>
                </View>
                <Divider style={{
                    marginTop: 15
                }}/>
                <View style={styles.contentWrapper}>
                    <Text>Analytics</Text>
                    <Text>1234</Text>
                </View>
                <Divider style={{
                    marginTop: 15
                }}/>
                <View style={styles.contentWrapper}>
                    <Text>Analytics</Text>
                    <Text>1234</Text>
                </View>
                <Divider style={{
                    marginTop: 15
                }}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '5%',
        width: windowWidth / 2
    },
    contentWrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15
    },
    divider: {
        color: '#777'
    }
});