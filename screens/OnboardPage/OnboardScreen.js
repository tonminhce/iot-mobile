import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { styles } from "./OnboardScreenStyles";


function OnboardScreen() {
  const navigation = useNavigation();

  const getStartedHandler = () => {
    navigation.replace("Login");
  };

  let [fontsLoaded] = useFonts({
    Pacifico: require("../../assets/fonts/Pacifico-Regular.ttf"), // update with your font file path
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.smartdurian}>Smart Durian</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../assets/images/durian.png")}
          />
        </View>
        <Text style={styles.label}>Control Anywhere</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.text}>Control your garden with a tap.</Text>
          <Text style={styles.text}>Adjust your thermostat, turn off</Text>
          <Text style={styles.text}>lights and more, all in one app.</Text>
          <Text style={styles.text}>Welcome to Smart Durian.</Text>
        </View>
        <TouchableOpacity
          onPress={getStartedHandler}
          style={styles.getStartedButton}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OnboardScreen;
