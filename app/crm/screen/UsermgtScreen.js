import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const UsermgtScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          height: 50,
          width: "90%",
          elevation: 9,
          backgroundColor: "#fff",
          marginTop: 200,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("ManageUserScreen")}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Manage User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          height: 50,
          width: "90%",
          elevation: 9,
          backgroundColor: "#fff",
          marginTop: 30,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          height: 50,
          width: "90%",
          elevation: 9,
          backgroundColor: "#fff",
          marginTop: 30,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("EditProfileScreen")}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UsermgtScreen;

const styles = StyleSheet.create({});
