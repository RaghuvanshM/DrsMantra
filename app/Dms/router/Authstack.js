import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login";

import HomeScreen from "../screen/HomeScreen";
import OtpScreen from "../screen/OtpScreen";
import Registrationdone from "../screen/Registrationdone";
import StartScreen from "../screen/StartScreen";
import OfficialWorkDetailScreen from "../screen/OfficialWorkDetailScreen";
import ContinueScreen from "../screen/ContinueScreen";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     
      <Stack.Screen name="SignUp" component={HomeScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Registrationdone" component={Registrationdone} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="ContinueScreen" component={ContinueScreen} />
      <Stack.Screen name="OfficialWorkDetailScreen" component={OfficialWorkDetailScreen} />
    </Stack.Navigator>
  );
}
export default AuthStack;
