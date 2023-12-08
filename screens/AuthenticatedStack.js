import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomePage/HomeStack";
import StatisticScreen from "./StatisticPage/StatisticScreen";
import SettingsScreen from "./SettingsPage/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomePage/HomeScreen";
import SettingsStack from "./SettingsPage/SettingsStack";

const Tab = createBottomTabNavigator();

export default function AuthenticatedStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Statistic") {
            iconName = focused ? "analytics" : "analytics-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007FFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Statistic"
        component={StatisticScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}