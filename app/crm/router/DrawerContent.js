import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

function DrawerContent({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProfileScreen");
        }}
      >
        <Text>ProfileScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default DrawerContent;
