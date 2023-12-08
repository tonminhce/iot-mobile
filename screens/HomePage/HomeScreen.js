import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import FlatButton from "../../components/UI/FlatButton";
import DeviceController from "../../components/Home/DeviceController";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeScreenStyles";
const avatarPlaceholderImg = require("../../assets/images/avatar-placeholder.jpg");

function HomeScreen() {
  const [timeString, setTimeString] = useState("");

  const getLiveTime = () => {
    const date = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const timeString = date.toLocaleString("en-US", options);
    setTimeString(timeString.toUpperCase());
  };

  useEffect(() => {
    getLiveTime();
    const timer = setInterval(getLiveTime, 1000);
    return () => clearInterval(timer); // Clear timer on unmount
  }, []);

  const devices = ["Lights", "Canopy"];
  const sensors = ["Sensor 1", "Sensor 2", "Sensor 3"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.homeContainer}>
        <StatusBar style="auto" />
        <View style={styles.welcomeHeading}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.timestamp}>{timeString}</Text>
            <Text style={styles.welcomeText}>Welcome, Minh Dep Trai!</Text>
          </View>
          <Image source={avatarPlaceholderImg} style={styles.avatarImg} />
        </View>

        <View style={styles.devicesContainer}>
          <Text style={styles.sectionText}>Devices</Text>
          <Text style={styles.addDeviceInstructionText}>
            To add a new device, please manually connect it to the central
            server.
          </Text>
          {devices.map((device) => (
            <DeviceController key={device} deviceName={device} />
          ))}
        </View>

        <View style={styles.sensorsContainer}>
          <Text style={styles.sectionText}>Sensors</Text>
          <Text style={styles.addDeviceInstructionText}>
            Feel free to monitor the live sensor data right at this very moment
            for updates.
          </Text>
          {sensors.map((sensor) => (
            <DeviceController key={sensor} deviceName={sensor} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
