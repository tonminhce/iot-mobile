import { Button, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TemperatureStatisticScreen from "./TemperatureStatisticScreen";

import { Colors } from "../../constants/colors";
import StatisticScreen from "./StatisticScreen";
import ECStatisticScreen from "./ECStatisticScreen";
import MoistureStatisticScreen from "./MoistureStatisticScreen";


const Stack = createNativeStackNavigator();

const ScenarioStackOptions = ({ navigation, back }) => ({
  headerTintColor: Colors.orangePrimary,
  headerTitleStyle: {
    color: "#000",
  },
});

const NewScenarioOptions = {
  headerRight: () => (
    <Button
      onPress={() => {
        console.log("Save scenario");
      }}
      color={Colors.orangePrimary}
      title="Done"
    />
  ),
};

export default function StatisticStack() {
  return (
    <Stack.Navigator screenOptions={ScenarioStackOptions}>
      <Stack.Screen name="Statistic" component={StatisticScreen} />
      <Stack.Screen name="TempScreen" component={TemperatureStatisticScreen} />
      <Stack.Screen name="ECScreen" component={ECStatisticScreen} />
      <Stack.Screen name="MoistScreen" component={MoistureStatisticScreen} />
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({});
