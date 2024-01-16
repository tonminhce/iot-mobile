import React, { useCallback, useContext } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./SensorStyles";
import { SensorContext } from "../../store/sensorContext";

const TemperatureHumidityScreen = () => {

  const { sensor2DataArray } = useContext(SensorContext);
  console.log(sensor2DataArray);
  const sensor2Data = {
    AirHumidity: sensor2DataArray[0],
    AirTemperature: sensor2DataArray[1],
    Alarm: sensor2DataArray[2],
    Battery: sensor2DataArray[3],
  }
  const sensorUnits = {
    Battery: "V",
    AirHumidity: "%",
    AirTemperature: "°C",

  };

  const getIconName = useCallback((key) => {
    switch (key) {
      case "Battery":
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

  const renderSensor2Data = () => {
    return Object.keys(sensor2Data).map((key) => {
      const value = typeof sensor2Data[key] === 'number' ? sensor2Data[key].toFixed(2) : sensor2Data[key];
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
        <View style={styles.sensorsContainer}>{renderSensor2Data()}</View>
      </View>
    </View>
  );
};

export default TemperatureHumidityScreen;