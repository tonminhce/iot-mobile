import React, { useContext, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { styles } from './StatisticStyle';
import { LineChart } from 'react-native-chart-kit';
import { Colors } from "../../constants/colors";
import { SensorContext } from "../../store/sensorContext";

function SoilHumidityStatisticScreen() {
    const formatYLabel = (value) => `${value} %`;
    const { soilHumidity } = useContext(SensorContext);
    console.log(soilHumidity);
    const statistics = useMemo(() => {
        const max = Math.max(...soilHumidity);
        const min = Math.min(...soilHumidity);
        const avg = soilHumidity.reduce((acc, val) => acc + val, 0) / soilHumidity.length;
        return { max, min, avg };
    }, [soilHumidity]);
    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <Text style={styles.title}>Soil Humidity Statistics</Text>
                <Text style={styles.statistic}>Average: {statistics.avg.toFixed(2)}%</Text>
                <Text style={styles.statistic}>Maximum: {statistics.max}%</Text>
                <Text style={styles.statistic}>Minimum: {statistics.min}%</Text>
                <View style={styles.statistic}>
                    <StatusBar style="auto" />
                    <View>
                        <LineChart
                            data={{
                                datasets: [
                                    {
                                        data: [
                                            soilHumidity[9] ?? 0,
                                            soilHumidity[8] ?? 0,
                                            soilHumidity[7] ?? 0,
                                            soilHumidity[6] ?? 0,
                                            soilHumidity[5] ?? 0,
                                            soilHumidity[4] ?? 0,
                                            soilHumidity[3] ?? 0,
                                            soilHumidity[2] ?? 0,
                                            soilHumidity[1] ?? 0,
                                            soilHumidity[0] ?? 0
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width}
                            height={220}
                            yAxisLabel=""
                            yAxisInterval={1}
                            chartConfig={{
                                backgroundColor: Colors.bluePrimary,
                                backgroundGradientFrom: Colors.bluePrimary,
                                backgroundGradientTo: Colors.bluePrimary,
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 15
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: Colors.bluePrimary
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                            withVerticalLabels
                            fromZero
                            formatYLabel={formatYLabel}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}


export default SoilHumidityStatisticScreen;
