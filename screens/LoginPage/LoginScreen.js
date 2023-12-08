import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./LoginScreenStyles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getSignupHandler = () => {
    navigation.replace("Signup");
  };

  const getForgotPasswordHandler = () => {
    navigation.replace("ForgotPassword");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={handleShowPassword}
          style={styles.passwordIconContainer}
        >
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="grey"
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getSignupHandler}>
        <Text style={styles.signupButtonText}>Not a member? Sign up now</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};


export default LoginScreen;
