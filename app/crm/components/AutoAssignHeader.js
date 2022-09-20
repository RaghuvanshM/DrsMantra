import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
const AutoAssignHeader = ({ navigation }) => {
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
        style={{ marginLeft: 2 }}
        name="home"
        size={25}
        color="#000"
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            marginLeft: 2,
            color: "blue",
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <AntDesign name="right" size={14} color="grey" />
      <TouchableOpacity onPress={() => navigation.navigate("LeadDetailScreen")}>
        <Text style={{ fontWeight: "bold", fontSize: 13, color: "#076ae3" }}>
          Leads Details
        </Text>
      </TouchableOpacity>

      <AntDesign name="right" size={17} color="grey" />
      <Text style={{ fontWeight: "bold", fontSize: 13, color: "#aaaba9" }}>
        Display Auto Assign Lead
      </Text>
    </View>
  );
};

export default AutoAssignHeader;

const styles = StyleSheet.create({});
