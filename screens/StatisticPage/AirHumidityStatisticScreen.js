import React, { useContext, useMemo } from 'react'; // Make sure to import useContext
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { styles } from './StatisticStyle';
import { LineChart } from 'react-native-chart-kit';
import { Colors } from "../../constants/colors";
import { SensorContext } from "../../store/sensorContext";

function AirHumidityStatisticScreen() {
  const formatYLabel = (value) => `${value}%`;
  const { humidity } = useContext(SensorContext);
  console.log(humidity);
  const statistics = useMemo(() => {
    const max = Math.max(...humidity);
    const min = Math.min(...humidity);
    const avg = humidity.reduce((acc, val) => acc + val, 0) / humidity.length;
    return { max, min, avg };
  }, [humidity]);
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>Air Humidity Statistics</Text>
        <Text style={styles.statistic}>Average: {statistics.avg.toFixed(2)}%</Text>
        <Text style={styles.statistic}>Maximum: {statistics.max}%</Text>
        <Text style={styles.statistic}>Minimum: {statistics.min}%</Text>
        <View style={styles.statistic}>
          <StatusBar style="auto" />
          <View>
            <Text>Air Humidity Statistic Screen</Text>
            <LineChart
              data={{
                datasets: [
                  {
                    data: [
                      humidity[9],
                      humidity[8],
                      humidity[7],
                      humidity[6],
                      humidity[5],
                      humidity[4],
                      humidity[3],
                      humidity[2],
                      humidity[1],
                      humidity[0]
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width}
              height={220}
              yAxisLabel=""
              yAxisInterval={1} // Adjust for proper labeling
              chartConfig={{
                backgroundColor: Colors.bluePrimary,
                backgroundGradientFrom: Colors.bluePrimary,
                backgroundGradientTo: Colors.bluePrimary,
                decimalPlaces: 0, // No decimal places
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

export default AirHumidityStatisticScreen;
