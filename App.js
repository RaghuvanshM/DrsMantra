import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Confirmationpage from "./app/confirmationpage";
import { NavigationContainer } from "@react-navigation/native";
import CrmAuthStack from "./app/crm/router/Authstack";
import CrmAppStack from "./app/crm/router/Appstack";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Confirmationpage" component={Confirmationpage} />
        <Stack.Screen name="CrmAuthStack" component={CrmAuthStack} />
        <Stack.Screen name="CrmAppStack" component={CrmAppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
