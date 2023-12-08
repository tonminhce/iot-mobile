import React, { useState } from "react";
import { Text, View, Switch, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./DeviceControllerStyle";
import { Colors } from "../../constants/colors";

function DeviceController({ deviceName }) {
  const navigation = useNavigation();
  const [isOn, setIsOn] = useState(false);

  const handlePress = () => {
    if (deviceName === "Sensor 1") {
      navigation.navigate("Sensor1");
    } else if (deviceName === "Sensor 2") {
      navigation.navigate("Sensor2");
    } else if (deviceName === "Sensor 3") {
      navigation.navigate("Sensor3");
    }
  };

  const toggleSwitch = () => {
    setIsOn((previousState) => !previousState);
  };

  return (
    <View style={styles.deviceContainer}>
      <Text style={styles.deviceNameText}>{deviceName}</Text>
      {deviceName.includes("Sensor") ? (
        <TouchableOpacity
          onPress={handlePress}
          style={styles.sensorValueContainer}
        >
          <Text style={styles.sensorValueText}>View data</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>{isOn ? "On" : "Off"}</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isOn}
            trackColor={{ false: "#767577", true: Colors.bluePrimary }}
            thumbColor={isOn ? Colors.blueTemp : "#f4f3f4"}
          />
        </View>
      )}
    </View>
  );
}

export default DeviceController;
