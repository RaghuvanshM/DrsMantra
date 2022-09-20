import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenCrm from "../screen/HomeScreenCrm";
import LeadScreen from "../screen/LeadScreen";
import LeadActivityScreen from "../screen/LeadActivityScreen";
import AssignLeadScreen from "../screen/AssignLeadScreen";
import NewLeadScreen from "../screen/NewLeadScreen";
import ManageLeadScreen from "../screen/ManageLeadScreen";
import ViewAssignLeadScreen from "../screen/ViewAssignLeadScreen";
import DomesticScreen from "../screen/DomesticScreen";
import LeadStatusScreen from "../screen/LeadStatusScreen";
import DisplayAutoAssingScreen from "../screen/DisplayAutoAssingScreen";
import LeadDetailScreen from "../screen/LeadDetailScreen";

import LeadIndustryScreen from "../screen/LeadIndustyScreen";
import LeadRatingScreen from "../screen/LeadRatingScreen";
import LeadSourceScreen from "../screen/LeadSourceScreen";
import ManuallyAssignScreen from "../screen/ManuallyAssignScreen";
import CrmScreen from "../screen/CrmScreen";
import UserKycScreen from "../screen/UserKycScreen";
import UsermgtScreen from "../screen/UsermgtScreen";
import ManageUserScreen from "../screen/ManageUserScreen";
import AddUserScreen from "../screen/AddUserScreen";
import ProfileScreen from "../screen/ProfileScreen";
import EditProfileScreen from "../screen/EditProfileScreen";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreenCrm" component={HomeScreenCrm} />
      <Stack.Screen name="CrmScreen" component={CrmScreen} />
      <Stack.Screen name="ManageLeadScreen" component={ManageLeadScreen} />
      <Stack.Screen name="LeadScreen" component={LeadScreen} />
      <Stack.Screen name="LeadActivityScreen" component={LeadActivityScreen} />
      <Stack.Screen name="AssignLeadScreen" component={AssignLeadScreen} />
      <Stack.Screen name="NewLeadScreen" component={NewLeadScreen} />
      <Stack.Screen name="DomesticScreen" component={DomesticScreen} />
      <Stack.Screen name="LeadStatusScreen" component={LeadStatusScreen} />
      <Stack.Screen name="LeadDetailScreen" component={LeadDetailScreen} />
      <Stack.Screen name="LeadIndustryScreen" component={LeadIndustryScreen} />
      <Stack.Screen name="LeadRatingScreen" component={LeadRatingScreen} />
      <Stack.Screen name="LeadSourceScreen" component={LeadSourceScreen} />
      <Stack.Screen name="UserKycScreen" component={UserKycScreen} />
      <Stack.Screen name="UsermgtScreen" component={UsermgtScreen} />
      <Stack.Screen name="ManageUserScreen" component={ManageUserScreen} />
      <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen
        name="ManuallyAssignScreen"
        component={ManuallyAssignScreen}
      />
      <Stack.Screen
        name="DisplayAutoAssingScreen"
        component={DisplayAutoAssingScreen}
      />
      <Stack.Screen
        name="ViewAssignLeadScreen"
        component={ViewAssignLeadScreen}
      />
    </Stack.Navigator>
  );
}
export default AuthStack;
