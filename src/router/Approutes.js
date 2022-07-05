import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../screen/Profile";
import HomeScreen from "../screen/HomeScreen";
import OtpScreen from "../screen/OtpScreen";
import Registrationdone from "../screen/Registrationdone";
import DataScreen from "../screen/DataScreen";

const Drawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="DataScreen" component={DataScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    
    </Drawer.Navigator>
  );
}
export default AppRoutes;
