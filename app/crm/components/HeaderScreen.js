import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
const HeaderScreen = () => {
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
      <FontAwesome name="home" size={25} color="#000" />
      <TouchableOpacity>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: 5 }}>
          Home
        </Text>
      </TouchableOpacity>
      <AntDesign name="right" size={20} color="grey" />
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>Lead Activity</Text>
    </View>
  );
};

export default HeaderScreen;

const styles = StyleSheet.create({});
