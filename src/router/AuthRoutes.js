import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screen/Login";
import SignUpScreen from "../screen/Signup";

const Stack = createStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
export default AuthRoutes;
