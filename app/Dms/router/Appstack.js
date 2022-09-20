import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "./DrawerContent";
import ProfileScreen from "../screen/ProfileScreen";
import SettingScreen from "../screen/SettingScreen";
import HomeScreen from "../screen/HomeScreen";
import OtpScreen from "../screen/OtpScreen";
import HomeScreenCrm from "../../crm/screen/HomeScreenCrm";
import DataScreen from "../screen/DataScreen";
import RetailingScreen from "../screen/RetailingScreen";
import OutScreen from "../screen/OutScreen";
import NonProductiveScreen from "../screen/NonProductiveScreen";
import NonProductiveRetailScreen from "../screen/NonProductiveRetailScreen";
import RetailerOrderScreen from "../screen/RetailerOrderScreen";
import NoSalesReasonScreen from "../screen/NoSalesReasonScreen";
import DetailScreen from "../screen/DetailScreen";
import DetailsScreen from "../screen/DetailsScreen";
import NewOutletScreen from "../screen/NewOutletScreen";
import ConfirmationScreen from "../screen/ConfirmationScreen";
import OrderCnfScreen from "../screen/OrderCnfScreen";
import MapScreen from "../screen/MapScreen";
import NewOutletScreen1 from "../screen/NewOutletScreen1";
import NewOutletScreen2 from "../screen/NewOutletScreen2";
import NewOutletScreen3 from "../screen/NewOutletScreen3";
import NewOutletScreen4 from "../screen/NewOutletScreen4";
import OutletImgScreen from "../screen/OutletImgScreen";
import DsrMantraScreen from "../screen/DsrMantraScreen";
import ChangeBeatScreen from "../screen/ChangeBeatScreen";


// import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: "80%" }}
      headerMode="none"
    >
      <Drawer.Screen name="DrawerStack" component={tempStack} />
    </Drawer.Navigator>
  );
}

function tempStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

     
      <Stack.Screen name="DataScreen" component={DataScreen} />
      <Stack.Screen name="RetailingScreen" component={RetailingScreen} />
      <Stack.Screen name="OutScreen" component={OutScreen} />
      <Stack.Screen name="NonProductiveScreen" component={NonProductiveScreen} />
      <Stack.Screen name="NonProductiveRetailScreen" component={NonProductiveRetailScreen} />
      <Stack.Screen name="RetailerOrderScreen" component={RetailerOrderScreen} />
      <Stack.Screen name="NoSalesReasonScreen" component={NoSalesReasonScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="NewOutletScreen" component={NewOutletScreen} />
      <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      <Stack.Screen name="OrderCnfScreen" component={OrderCnfScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="NewOutletScreen1" component={NewOutletScreen1} />
      <Stack.Screen name="NewOutletScreen2" component={NewOutletScreen2} />
      <Stack.Screen name="NewOutletScreen3" component={NewOutletScreen3} />
      <Stack.Screen name="NewOutletScreen4" component={NewOutletScreen4} />
      <Stack.Screen name="OutletImgScreen" component={OutletImgScreen} />
      <Stack.Screen name="DsrMantraScreen" component={DsrMantraScreen} />
      <Stack.Screen name="ChangeBeatScreen" component={ChangeBeatScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
