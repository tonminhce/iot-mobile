import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnalyticScreen from "./StatisticScreen";
import AirHumidityStatisticScreen from "./AirHumidityStatisticScreen";
import AirTemperatureStatisticScreen from "./AirTemperatureStatisticScreen";
import IlluminanceStatisticScreen from "./IlluminanceStatisticScreen";
import SoilTemperatureStatisticScreen from "./SoilTemperatureStatisticScreen";
import SoilHumidityStatisticScreen from "./SoilHumidityStatisticScreen";
import SoilECStatisticScreen from "./SoilECStatisticScreen";


const Stack = createNativeStackNavigator();

export default function StatisticStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="AnalyticScreen" component={AnalyticScreen} />
            <Stack.Screen name="AirHumidityStatisticScreen" component={AirHumidityStatisticScreen} options={{ headerShown: true }} />
            <Stack.Screen name="AirTemperatureStatisticScreen" component={AirTemperatureStatisticScreen} options={{ headerShown: true }} />
            <Stack.Screen name="IlluminanceStatisticScreen" component={IlluminanceStatisticScreen} options={{ headerShown: true }} />
            <Stack.Screen name="SoilTemperatureStatisticScreen" component={SoilTemperatureStatisticScreen} options={{ headerShown: true }} />
            <Stack.Screen name="SoilHumidityStatisticScreen" component={SoilHumidityStatisticScreen} options={{ headerShown: true }} />
            <Stack.Screen name="SoilECStatisticScreen" component={SoilECStatisticScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}

