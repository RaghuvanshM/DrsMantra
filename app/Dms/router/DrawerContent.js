import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from "@react-navigation/native";

import HeaderScreen from "../router/DrawerHeaderScreen";

const Drowecontent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <HeaderScreen />
      <View>
        <DrawerItems
          title={"Demo User DSM"}
          icon={"user-circle-o"}
          onPress={() => {}}
        />
        <DrawerItems
          title={"START OFICIAL WORK"}
          icon={"exchange"}
          onPress={() => {}}
        />
        <DrawerItems
          title={"CHANGE BEAT"}
          icon={"exchange"}
          color={"red"}
          onPress={() =>navigation.navigate('ChangeBeatScreen')}
        />
        <DrawerItems
          title={"My Porformance"}
          icon={"line-graph"}
          isEntypo={true}
          onPress={() => {}}
        />
        <DrawerItems
          title={"My Pocket MIS"}
          icon={"bookmark-o"}
          onPress={() => {}}
        />
        <DrawerItems
          title={"Start EveryDay via Whatsapp"}
          icon={"whatsapp"}
          onPress={() => {}}
        />
        <DrawerItems
          title={"Attandance/Leave"}
          icon={"book"}
          onPress={() => {}}
        />
        <DrawerItems
          title={"My Pending Request"}
          icon={"user"}
          onPress={() => {}}
        />
        <DrawerItems
          title={"Messages"}
          icon={"bell"}
          isEntypo={true}
          onPress={() => {}}
        />
        <DrawerItems title={"External"} icon={"inbox"} onPress={() => {}} />

        <TouchableOpacity
          style={{
            marginTop: 25,
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            height: 40,
            width: "90%",
            backgroundColor: "#d8e8f2",
            borderRadius: 5,
          }}
        >
          <FontAwesome name="user" size={30} color="#81d1fc" />
          <Text style={{ marginLeft: 10, fontSize: 13 }}>FA Customer Care</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 50,
            width: "100%",
            marginTop: 10,
            backgroundColor: "#f5022f",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <Text style={{ color: "#fff" }}>END DAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drowecontent;

const DrawerItems = ({ title, icon, color, isEntypo, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 25,
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {!isEntypo && (
        <FontAwesome name={icon} size={40} color={color ? color : "#7ac3eb"} />
      )}
      {isEntypo && <Entypo name={icon} size={30} color="#81d1fc" />}
      <View>
        <Text style={{ marginLeft: 10 }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});
