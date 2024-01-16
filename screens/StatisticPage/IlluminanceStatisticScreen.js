import React, { useContext, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { styles } from './StatisticStyle';
import { LineChart } from 'react-native-chart-kit';
import { Colors } from "../../constants/colors";
import { SensorContext } from "../../store/sensorContext";

function IlluminanceStatisticScreen() {
    const formatYLabel = (value) => `${value} Lux`;
    const { illuminance } = useContext(SensorContext);
    console.log(illuminance);
    const statistics = useMemo(() => {
        const max = Math.max(...illuminance);
        const min = Math.min(...illuminance);
        const avg = illuminance.reduce((acc, val) => acc + val, 0) / illuminance.length;
        return { max, min, avg };
    }, [illuminance]);
    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <Text style={styles.title}>Illuminance Statistics</Text>
                <Text style={styles.statistic}>Average: {statistics.avg.toFixed(2)} Lux</Text>
                <Text style={styles.statistic}>Maximum: {statistics.max} Lux</Text>
                <Text style={styles.statistic}>Minimum: {statistics.min} Lux</Text>
                <View style={styles.statistic}>
                    <StatusBar style="auto" />
                    <View>
                        <LineChart
                            data={{
                                datasets: [
                                    {
                                        data: [
                                            illuminance[9],
                                            illuminance[8],
                                            illuminance[7],
                                            illuminance[6],
                                            illuminance[5],
                                            illuminance[4],
                                            illuminance[3],
                                            illuminance[2],
                                            illuminance[1],
                                            illuminance[0]
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


export default IlluminanceStatisticScreen;
