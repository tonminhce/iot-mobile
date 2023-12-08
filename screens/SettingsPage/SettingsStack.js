import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./SettingsScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="SettingScreen" component={SettingsScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
}