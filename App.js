import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Confirmationpage from "./app/confirmationpage";
import { NavigationContainer } from "@react-navigation/native";
import DmsAppStack from "./app/Dms/router/Appstack";
import DmsAuthStack from "./app/Dms/router/Authstack";
import CrmAppStack from "./app/crm/router/Appstack";
import CrmAuthStack from "./app/crm/router/Authstack";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Confirmationpage" component={Confirmationpage} />
        <Stack.Screen name="DmsAppStack" component={DmsAppStack} />
        <Stack.Screen name="DmsAuthStack" component={DmsAuthStack} />
        <Stack.Screen name="CrmAppStack" component={CrmAppStack} />
        <Stack.Screen name="CrmAuthStack" component={CrmAuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
