import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
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
  welcomeText: {
    fontFamily: "epilogue-700",
    fontWeight: "bold",
    fontSize: width * 0.06,
  },
  sensorsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
    backgroundColor: "white",
  },
  sensorCard: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 8, // Increase padding
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sensorInfoContainer: {
    marginLeft: 10,
  },
  sensorKey: {
    color: Colors.dark,
    fontSize: width * 0.04,
    fontFamily: "open-sans-bold",
    marginLeft: width * 0.02,
  },
  sensorValue: {
    color: Colors.grey,
    fontSize: width * 0.04,
    fontFamily: "open-sans",
    marginLeft: width * 0.02,
  },
  iconStyle: {
    fontSize: 20, // Increase the icon size
    color: Colors.lightBlue, // Change the color of the icons
  },
  backButton: {
    color: Colors.lightBlue,
    fontSize: width * 0.01,
    fontFamily: "open-sans",
  },
});

export default styles;
