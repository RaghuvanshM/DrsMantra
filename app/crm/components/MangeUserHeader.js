import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
const ManageUserHeader = () => {
  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        height: 50,
        backgroundColor: "#fff",
        elevation: 9,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <FontAwesome
        style={{ marginLeft: 7 }}
        name="home"
        size={25}
        color="#000"
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 5,
            color: "blue",
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <AntDesign style={{ marginTop: 3 }} name="right" size={17} color="grey" />
      <TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Manage User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageUserHeader;

const styles = StyleSheet.create({});
