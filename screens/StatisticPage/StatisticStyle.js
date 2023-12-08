import { Colors } from "../../constants/colors";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


export const styles = StyleSheet.create({
  scenarioList: {
    // marginTop: 12,
    // backgroundColor: "red",
    // flex: 1
  },
  addBtn: {
    marginTop: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: Colors.grayPrimary,
    borderRadius: 6,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
