import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
export default AuthStack;
