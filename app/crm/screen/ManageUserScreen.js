import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import ManageUserHeader from "../components/MangeUserHeader";

const ManageUserScreen = ({ navigation }) => {
  return (
    <View>
      <ManageUserHeader />
      <TouchableOpacity
        style={{
          marginTop: 15,
          marginLeft: 20,
        }}
        onPress={() => navigation.navigate("AddUserScreen")}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Add User</Text>
      </TouchableOpacity>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          height: 400,
          width: "90%",
          elevation: 9,
          backgroundColor: "#fff",
          alignSelf: "center",
          marginTop: 30,
          padding: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Name</Text>
          <Text style={{ fontSize: 15 }}>Rohan Kumar</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Mobile</Text>
          <Text style={{ fontSize: 15 }}>7355163605</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>User Code</Text>
          <Text style={{ fontSize: 15 }}>SALE001</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>UserName/</Text>

          <Text style={{ fontSize: 15 }}>Administrator</Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>LoginId</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Mobile</Text>
          <Text style={{ fontSize: 15 }}>7355163605</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Status</Text>
          <Text style={{ fontSize: 15 }}>Active</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Date</Text>
          <Text style={{ fontSize: 15 }}>03/08/2022</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Action</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ marginRight: 7 }}>
              <FontAwesome name="pencil" size={25} color="#fcba03" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="delete" size={25} color="#ff0b03" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ManageUserScreen;

const styles = StyleSheet.create({});
