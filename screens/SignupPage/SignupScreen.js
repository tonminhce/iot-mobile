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
import { styles } from "./SignupScreenStyles";
const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getLoginHandler = () => {
    navigation.replace("Login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

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

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={getLoginHandler}>
        <Text style={styles.alreadyAccountText}>Already have an account?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
