import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "./OnboardPage/OnboardScreen";
import LoginScreen from "./LoginPage/LoginScreen";
import SignupScreen from "./SignupPage/SignupScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboard" component={OnboardScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
