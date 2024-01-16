import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions, Alert, View } from "react-native";
import { Colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const DataBox = ({ label, value, onPress }) => (
  <TouchableOpacity
    style={styles.dataContainer}
    onPress={onPress}
  >
    <Text style={styles.dataText}>{label} {value}</Text>
  </TouchableOpacity>
);

function AnalyticScreen({ navigation, airTemperature, airHumid, illuminance, soilTemperature, soilHumidity, soilEC }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Statistics</Text>
      <Text style={styles.descriptionText}>
        Here are your current environment readings analytics:
      </Text>
      <DataBox label="Air Temperature" value={airTemperature}
        onPress={() => navigation.navigate('AirTemperatureStatisticScreen')} />
      <DataBox
        label="Air Humidity"
        value={airHumid}
        onPress={() => navigation.navigate('AirHumidityStatisticScreen')}
      />
      <DataBox label="Illuminance" value={illuminance} 
      onPress={() => navigation.navigate('IlluminanceStatisticScreen')}
      />
      <DataBox label="Soil Temperature" value={soilTemperature} 
        onPress={() => navigation.navigate('SoilTemperatureStatisticScreen')}/>
      <DataBox label="Soil Humidity" value={soilHumidity} onPress={() => navigation.navigate('SoilHumidityStatisticScreen')} />
      <DataBox label="Soil EC" value={soilHumidity} onPress={() => navigation.navigate('SoilECStatisticScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    paddingTop: width * 0.08,
    fontFamily: "epilogue-700",
    fontWeight: "bold",
    fontSize: width * 0.06,
  },
  descriptionText: {
    color: Colors.darkGrey,
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: width * 0.03,
    marginBottom: height * 0.02,
  },
  dataContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    borderWidth: 1,
    height: 80
  },
  dataText: {
    fontFamily: "be-vietnam",
    color: "rgba(30, 41, 51, 1)",
    fontSize: 20,
  },
});

export default AnalyticScreen;