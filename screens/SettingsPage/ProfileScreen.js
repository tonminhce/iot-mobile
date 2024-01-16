import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, Alert, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { AuthContext } from '../../store/auth-context';

const { width, height } = Dimensions.get("window");

const ProfileScreen = ({ route, navigation }) => {
    const { email, name, creationTime } = route.params;
    const { onLogout } = useContext(AuthContext);
    const DataBox = ({ label, value }) => (
        <TouchableOpacity
            style={styles.dataContainer}
            onPress={() => Alert.alert(`${label}: ${value}`)}
        >
            <Text style={styles.dataText}>{label}: {value}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Profile</Text>
            <Text style={styles.descriptionText}>Here are your profile details:</Text>
            <DataBox label="Email" value={email} />
            <DataBox label="Name" value={name} />
            <DataBox label="Created At" value={creationTime} />
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={onLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.background,
    },
    headerText: {
        paddingTop: width * 0.05,
        fontFamily: "epilogue-700",
        fontWeight: "bold",
        fontSize: width * 0.06,
    },
    descriptionText: {
        color: Colors.darkGrey,
        fontStyle: "italic",
        fontWeight: "600",
        fontSize: width * 0.03,
        marginBottom: height * 0.02,
    },
    dataContainer: {
        backgroundColor: "white",
        padding: 8,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
        borderWidth: 1,
    },
    dataText: {
        fontFamily: "be-vietnam",
        color: "rgba(30, 41, 51, 1)",
        fontSize: 16,
    },
    logoutButton: {
        backgroundColor: Colors.bluePrimary,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    logoutButtonText: {
        color: "#fff",
        textAlign: "center",
    },
});

export default ProfileScreen;