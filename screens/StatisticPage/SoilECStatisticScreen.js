import React, { useContext, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { styles } from './StatisticStyle';
import { LineChart } from 'react-native-chart-kit';
import { Colors } from "../../constants/colors";
import { SensorContext } from "../../store/sensorContext";

function SoilECStatisticScreen() {
    const formatYLabel = (value) => `${value} mS/cm`;
    const { electricalConductivity } = useContext(SensorContext);
    console.log(electricalConductivity);
    const statistics = useMemo(() => {
        const max = Math.max(...electricalConductivity);
        const min = Math.min(...electricalConductivity);
        const avg = electricalConductivity.reduce((acc, val) => acc + val, 0) / electricalConductivity.length;
        return { max, min, avg };
    }, [electricalConductivity]);
    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <Text style={styles.title}>Soil EC Statistics</Text>
                <Text style={styles.statistic}>Average: {statistics.avg.toFixed(2)} mS/cm</Text>
                <Text style={styles.statistic}>Maximum: {statistics.max} mS/cm</Text>
                <Text style={styles.statistic}>Minimum: {statistics.min} mS/cm</Text>
                <View style={styles.statistic}>
                    <StatusBar style="auto" />
                    <View>
                        <LineChart
                            data={{
                                datasets: [
                                    {
                                        data: [
                                            electricalConductivity[9],
                                            electricalConductivity[8],
                                            electricalConductivity[7],
                                            electricalConductivity[6],
                                            electricalConductivity[5],
                                            electricalConductivity[4],
                                            electricalConductivity[3],
                                            electricalConductivity[2],
                                            electricalConductivity[1],
                                            electricalConductivity[0]
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


export default SoilECStatisticScreen;
