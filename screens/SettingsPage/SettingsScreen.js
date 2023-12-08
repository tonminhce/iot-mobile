import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Text,
  View,
  Dimensions,
} from "react-native";
import { List, Switch } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const CustomListItem = ({ title, icon, onPress, children }) => (
  <View style={styles.listItemContainer}>
    <List.Item
      title={title}
      titleStyle={styles.listItemTitle}
      left={() => <List.Icon icon={icon} color="blue" />}
      onPress={onPress}
      right={() => children}
    />
  </View>
);

const SettingsScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const handleProfilePress = () =>
    navigation.navigate('ProfileScreen', {
      email: 'minh@gmail.com',
      name: 'Minh dep trai',
      creationTime: '2023-12-01'
    });

  const handleChangePassword = () => Alert.alert("Change password clicked");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Settings</Text>
      </View>

      <List.Section style={styles.listSection}>
        <List.Subheader style={styles.subHeader}>Account</List.Subheader>

        <CustomListItem
          title="Profile"
          icon="account"
          onPress={handleProfilePress}
        />

        <CustomListItem
          title="Change Password"
          icon="lock"
          onPress={handleChangePassword}
        />

        <List.Subheader style={styles.subHeader}>Preferences</List.Subheader>

        <CustomListItem
          title="Notifications"
          icon="bell"
          onPress={onToggleSwitch}
        >
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </CustomListItem>
      </List.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: width * 0.05,
    paddingLeft: width * 0.035,
  },
  header: {
    paddingTop: width * 0.05,
    fontSize: width * 0.06,
    fontWeight: "bold",

  },
  listSection: {
    marginTop: height * 0.01,
  },
  subHeader: {
    color: "#4a4a4a",
    fontWeight: "bold",
    fontSize: width * 0.035,
  },
  listItemContainer: {
    paddingLeft: width * 0.025,
  },
  listItemTitle: {
    fontSize: width * 0.04,
  },
});

export default SettingsScreen;