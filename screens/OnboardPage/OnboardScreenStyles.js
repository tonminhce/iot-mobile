import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp("10%"),
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  smartdurian: {
    fontSize: wp("10%"),
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: hp("5%"),
    fontFamily: "Pacifico",
  },
  imageWrapper: {
    width: wp("80%"),
    height: hp("30%"),
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: hp("5%"),
  },
  label: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
    marginTop: hp("2%"),
    color: "#2f4f4f",
  },
  descriptionContainer: {
    alignSelf: "center",
  },
  text: {
    fontSize: wp("4%"),
    color: "#4682b4",
    alignSelf: "center",
    textAlign: "center",
  },
  getStartedButton: {
    height: hp("7%"),
    width: wp("50%"),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("3%"),
    backgroundColor: "#003f5c",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  getStartedText: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    color: "white",
  },
});