import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../screen/Profile";
import HomeScreen from "../screen/HomeScreen";
import OtpScreen from "../screen/OtpScreen";
import Registrationdone from "../screen/Registrationdone";
import DataScreen from "../screen/DataScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Drowecontent from "./DrawerItem";
import ChangeBeatScreen from "../screen/ChangeBeatScreen";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Drowecontent {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Profile" component={DataScreen} />
     <Drawer.Screen name="ChangeBeatScreen" component={ChangeBeatScreen}/>
    </Drawer.Navigator>
  );
}
function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={AppRoutes} />
    </Stack.Navigator>
  );
}
export default AppStack;
