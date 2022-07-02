import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.replace("Approute");
        }}
      >
        <Text>Move to Home </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
