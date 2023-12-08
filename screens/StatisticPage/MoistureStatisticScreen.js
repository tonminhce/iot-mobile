import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./StatisticStyle";


function MoistureStatisticScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Automation Screen</Text>
    </View>
  );
}

export default MoistureStatisticScreen;
