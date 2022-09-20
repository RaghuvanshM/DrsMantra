import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

function Login({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Login</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text>Move ToSignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: "CrmAppStack",
              },
            ],
          });
        }}
      >
        <Text>Move HomeScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login;
