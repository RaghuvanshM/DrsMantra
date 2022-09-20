import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
      <Stack.Screen name="DsrMantraScreen" component={DsrMantraScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
