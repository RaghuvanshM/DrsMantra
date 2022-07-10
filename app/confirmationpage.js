import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
function Confirmationpage({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "red" }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CrmAuthStack");
        }}
      >
        <Text style={{ fontSize: 40, marginTop: 50, color: "white" }}>Crm</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 40, marginTop: 50, color: "white" }}>Dms</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 40, marginTop: 50, color: "white" }}>
          Retailer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 40, marginTop: 50, color: "white" }}>Dfs</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Confirmationpage;
