import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/Home";
import ProfileScreen from "./src/screen/Profile";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/router/Approutes";
import AuthRoutes from "./src/router/AuthRoutes";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authroute" component={AuthRoutes} />
        <Stack.Screen name="Approute" component={AppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
