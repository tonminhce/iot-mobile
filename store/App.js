import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React, { useState, useEffect, createContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./screens/AuthStack";
import AuthenticatedStack from "./screens/AuthenticatedStack";


function Navigation() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "be-vietnam": require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    "epilogue-700": require("./assets/fonts/Epilogue-SemiBold-700.ttf"),
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />

      <Navigation />
    </SafeAreaProvider>
  );
}
