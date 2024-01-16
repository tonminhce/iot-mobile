import React, { useCallback, useContext } from "react";
import { View, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./SensorStyles";
import { SensorContext } from "../../store/sensorContext";


const TemperatureHumidityECScreen = () => {
  const { sensor1DataArray } = useContext(SensorContext);

  console.log(sensor1DataArray);
  const sensor1Data = {
   battery: sensor1DataArray[3],
    soilTemperature: sensor1DataArray[0],
    soilEC: sensor1DataArray[1],
    soilMoisture: sensor1DataArray[2],
  }
  ;
  const sensorUnits = {
    battery: "V",
    soilTemperature: "°C",
    soilEC: "mS/cm",
    soilMoisture: "%",
  };
  const getIconName = useCallback((key) => {
    switch (key) {
      case "battery":
        return "battery-charging";
      case "soilTemperature":
        return "thermometer";
      case "soilEC":
        return "flash-outline";
      case "soilMoisture":
        return "water";
      default:
        return "time-outline";
    }
  }, []);

  const renderSensor1Data = () => {
    return Object.keys(sensor1Data).map((key) => {
      const value = typeof sensor1Data[key] === 'number' ? sensor1Data[key].toFixed(2) : sensor1Data[key];
      const unit = sensorUnits[key] || '';
      return (
        <View style={styles.sensorCard} key={key}>
          <Icon name={getIconName(key)} style={styles.iconStyle} />
          <View style={styles.sensorInfoContainer}>
            <Text style={styles.sensorKey}>
              {key}
            </Text>
            <Text style={styles.sensorValue}>{`${value} ${unit}`}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <View style={styles.welcomeHeading}>
          <Text style={styles.welcomeText}>Sensor 2 Data</Text>
        </View>
        <View style={styles.sensorsContainer}>{renderSensor1Data()}</View>
      </View>
    </View>
  );
};

export default TemperatureHumidityECScreen;