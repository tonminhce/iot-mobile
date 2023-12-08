import { StyleSheet, Dimensions } from "react-native";
const {  height } = Dimensions.get("window");
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  deviceContainer: {
    backgroundColor: "white",
    width: "47%",
    borderRadius: 12,
    padding: 8,
    elevation: 2, // add shadow - android only
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    borderColor: "#000", // Added outline
    borderWidth: 1, // Added outline
    shadowRadius: 4.65,
    marginBottom: height * 0.01,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  deviceNameText: {
    fontFamily: "be-vietnam",
    color: "rgba(30, 41, 51, 1)",
    fontSize: 18,
  },
  deviceCaptionText: {
    fontFamily: "be-vietnam",
    color: "rgba(30, 41, 51, 0.6)", // Make the color lighter than deviceNameText
    fontSize: 10, // Make the font size smaller than deviceNameText
  },
  toggleText: {
    color: "#798794",
  },
  sensorValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  sensorValueText: {
    color: "#798794",
  },
  sensorValueUpdateButton: {
    color: Colors.bluePrimary,
  },
});