import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import TemperatureHumidityECScreen from "../SensorPage/TemperatureHumidityECScreen"
import TemperatureHumidityScreen from "../SensorPage/TemperatureHumidityScreen";
import TemperatureLightScreen from "../SensorPage/TemperatureLightScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Sensor1"
        component={TemperatureHumidityECScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Sensor2"
        component={TemperatureHumidityScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Sensor3"
        component={TemperatureLightScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
