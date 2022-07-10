import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SettingScreen");
        }}
      >
        <Text style={{ fontSize: 30 }}>Move to Setting Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
