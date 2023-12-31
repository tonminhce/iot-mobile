import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: "5%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: "2%",
    marginLeft: "1%",
    color: "#2f4f4f",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: "5%",
    marginBottom: "5%",
    color: "#4682b4",
    borderColor: "#ccc",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: "5%",
    marginBottom: "2%",
    borderColor: "#ccc",
  },
  passwordInput: {
    flex: 1,
    color: "#4682b4",
  },
  passwordIconContainer: {
    height: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: "4%",
    color: "#003f5c",
  },
  signupButton: {
    height: 50,
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3%",
    backgroundColor: "#003f5c",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: "1%",
    }, 
    shadowOpacity: 0.23,
    shadowRadius: "1%",
    elevation: 4,
    marginTop: "5%",
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  alreadyAccountText: {
    fontSize: 16,
    color: "#003f5c",
  },
});