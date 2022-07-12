import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerActions } from '@react-navigation/native';


import HeaderScreen from "../Drawer/HeaderScreen";
import { DrawerItem } from "@react-navigation/drawer";

const Drowecontent = ({ navigation }) => {
  return (
    <View>
      <HeaderScreen />
      <DrawerItem
        label={"this is dr"}
        onPress={() => navigation.navigate("RetailingScreen")}
      />
      <TouchableOpacity
        style={{
          marginTop: 80,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome name="user-circle-o" size={40} color="#7ac3eb" />
        <View>
          <Text style={{ marginLeft: 10 }}>Demo User DSM</Text>
          <Text style={{ marginLeft: 10, fontSize: 12 }}>Demo User DSM</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome name="exchange" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>START OFICIAL WORK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderBottomColor: "#fad7dd",
        }}
      >
        <FontAwesome name="exchange" size={30} color="#f51d45" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>CHANGE BEAT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("RetailingScreen")}
      >
        <Entypo name="line-graph" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>My Porformance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome name="bookmark-o" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>My Pocket MIS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome name="whatsapp" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>
          Start EveryDay via Whatsapp
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="book" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>Attandance/Leave</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome name="user" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>My Pending Request</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="bells" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="inbox" size={30} color="#81d1fc" />
        <Text style={{ marginLeft: 10, fontSize: 13 }}>External</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        marginTop:25,
        marginLeft:20,
        flexDirection:'row',
        alignItems:'center',
        height:40,
        width:'90%',
        backgroundColor:'#d8e8f2',
        borderRadius:5
      }}>
      <FontAwesome name="user" size={30} color='#81d1fc' />
      <Text style={{marginLeft:10,fontSize:13}}>FA Customer Care</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:50,
        width:'100%',
        marginTop:10,
        backgroundColor:'#f5022f',
        justifyContent:'center',
        alignItems:'center'
      }} onPress={()=>navigation.dispatch(DrawerActions.closeDrawer())} >
      <Text style={{color:'#fff'}}>END DAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Drowecontent;
