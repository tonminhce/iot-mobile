import React, { useContext, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { styles } from './StatisticStyle';
import { LineChart } from 'react-native-chart-kit';
import { Colors } from "../../constants/colors";
import { SensorContext } from "../../store/sensorContext";

function AirTemperatureStatisticScreen() {
  const formatYLabel = (value) => `${value}°C`;
  const { airArray } = useContext(SensorContext);
  console.log(airArray);
  const statistics = useMemo(() => {
    const max = Math.max(...airArray);
    const min = Math.min(...airArray);
    const avg = airArray.reduce((acc, val) => acc + val, 0) / airArray.length;
    return { max, min, avg };
  }, [airArray]);
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>Air Temperature Statistics</Text>
        <Text style={styles.statistic}>Average: {statistics.avg.toFixed(2)}°C</Text>
        <Text style={styles.statistic}>Maximum: {statistics.max}°C</Text>
        <Text style={styles.statistic}>Minimum: {statistics.min}°C</Text>
        <View style={styles.statistic}>
          <StatusBar style="auto" />
          <View>
            <LineChart
              data={{
                datasets: [
                  {
                    data: [
                      airArray[9],
                      airArray[8],
                      airArray[7],
                      airArray[6],
                      airArray[5],
                      airArray[4],
                      airArray[3],
                      airArray[2],
                      airArray[1],
                      airArray[0]
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


export default AirTemperatureStatisticScreen;
