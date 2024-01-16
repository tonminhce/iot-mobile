import React, { useContext } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./SensorStyles";
import { SensorContext } from "../../store/sensorContext";

const TemperatureLightScreen = () => {
  const { sensor3DataArray } = useContext(SensorContext);
  console.log(sensor3DataArray);
  const sensor1Data = {
    Illuminance: sensor3DataArray[0],
    AirTemperature: sensor3DataArray[1],
    Battery: sensor3DataArray[2],
  };

  const sensorUnits = {
    Battery: "V",
    Illuminance: "Lux",
    AirTemperature: "°C",
  };

  const getIconName = (key) => {
    switch (key) {
      case "Battery":
        return "battery-charging";
      case "Illuminance":
        return "sunny-outline";
      case "AirTemperature":
        return "thermometer";
      default:
        return "time-outline";
    }
  };

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
          <Text style={styles.welcomeText}>Sensor 3 Data</Text>
        </View>
        <View style={styles.sensorsContainer}>{renderSensor1Data()}</View>
      </View>
    </View>
  );
};

export default TemperatureLightScreen;