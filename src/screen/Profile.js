import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const ProfileScreen = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
      <Text>ProfileScreen</Text>
    </TouchableOpacity>
  );
};
export default ProfileScreen;
