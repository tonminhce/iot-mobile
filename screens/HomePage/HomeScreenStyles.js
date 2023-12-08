import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  homeContainer: {
    paddingHorizontal: width * 0.05,
  },
  welcomeHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: height * 0.02,
  },
  headingTextContainer: {},
  scenariosContainer: {
    marginBottom: height * 0.04,
  },
  sensorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
  devicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
  avatarImg: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
  },
  scenarioBtn: {
    backgroundColor: Colors.bluePrimary,
    marginVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    borderRadius: 12,
  },
  scenarioText: {
    color: Colors.white,
    fontSize: width * 0.05,
    textAlign: "center",
  },
  sectionText: {
    fontFamily: "open-sans-bold",
    fontSize: width * 0.05,
    color: Colors.dark,
  },
  addDeviceInstructionText: {
    color: Colors.darkGrey,
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: width * 0.03,
    marginBottom: height * 0.01,
  },
  addSensorInstructionText: {
    color: Colors.darkGrey,
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: width * 0.03,
    marginBottom: height * 0.01,
  },
  welcomeText: {
    fontFamily: "epilogue-700",
    fontWeight: "bold",
    fontSize: width * 0.06,
  },
  timestamp: {
    color: Colors.grey,
    fontSize: width * 0.03,
  },
});
