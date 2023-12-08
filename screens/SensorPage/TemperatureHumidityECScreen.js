import React, { useCallback } from "react";
import { View, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./SensorStyles";

// Fake data for demonstration purposes
const SENSOR_DATA = {
  battery: "75%",
  soilTemperature: "30°C",
  soilEC: "1.2 mS/cm", // Millisiemens per centimeter
  soilMoisture: "45%",
  updateTime: new Date().toLocaleTimeString(), // Shows current time as last update time
};

const TemperatureHumidityECScreen = () => {
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

  const renderSensorData = useCallback(() => {
    return Object.keys(SENSOR_DATA).map((key, index) => (
      <View style={styles.sensorCard} key={index}>
        <Icon name={getIconName(key)} style={styles.iconStyle} />
        <View style={styles.sensorInfoContainer}>
          <Text style={styles.sensorKey}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
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
          <Text style={styles.welcomeText}>Sensor 1 Data</Text>
        </View>
        <View style={styles.sensorsContainer}>{renderSensorData()}</View>
      </View>
    </View>
  );
};

export default TemperatureHumidityECScreen;