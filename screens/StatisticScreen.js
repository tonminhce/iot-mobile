import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function StatisticScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Statistic Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StatisticScreen;
