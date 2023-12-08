import React, { useCallback } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./SensorStyles";

// Fake data for demonstration purposes
const SENSOR_DATA = {
  battery: "80%",
  AirHumidity: "50%",
  AirTemperature: "20°C",
  Alarm: "No Alarm",
  updateTime: new Date().toLocaleTimeString(), // Shows current time as last update time
};

const TemperatureHumidityScreen = () => {
  const getIconName = useCallback((key) => {
    switch (key) {
      case "battery":
        return "battery-charging";
      case "AirHumidity":
        return "water";
      case "AirTemperature":
        return "thermometer";
      case "Alarm":
        return "alarm-outline";
      default:
        return "time-outline";
    }
  }, []);

const beautifyKey = (key) => {
  return key
    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
};

  const renderSensorData = useCallback(() => {
    return Object.keys(SENSOR_DATA).map((key, index) => (
      <View style={styles.sensorCard} key={index}>
        <Icon name={getIconName(key)} style={styles.iconStyle} />
        <View style={styles.sensorInfoContainer}>
          <Text style={styles.sensorKey}>
            {beautifyKey(key)}
          </Text>
          <Text style={styles.sensorValue}>{SENSOR_DATA[key]}</Text>
        </View>
      </View>
    ));
  }, [getIconName]);

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <View style={styles.welcomeHeading}>
          <Text style={styles.welcomeText}>Sensor 2 Data</Text>
        </View>
        <View style={styles.sensorsContainer}>{renderSensorData()}</View>
      </View>
    </View>
  );
};

export default TemperatureHumidityScreen;