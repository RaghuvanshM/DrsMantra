import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import AddUserHeader from "../components/AddUserHeader";

const AddUserScreen = () => {
  return (
    <View>
      <AddUserHeader />
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          height: 500,
          width: "90%",
          elevation: 9,
          backgroundColor: "#fff",
          alignSelf: "center",
          marginTop: 30,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Permission Level :</Text>
          <TextInput
            style={{
              height: 30,
              borderWidth: 1,
              width: 160,
              marginLeft: 10,
              borderRadius: 2,
            }}
            placeholder=""
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Permission Level :</Text>
          <TextInput
            style={{
              height: 30,
              borderWidth: 1,
              width: 160,
              marginLeft: 10,
              borderRadius: 2,
            }}
            placeholder=""
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Full Name :</Text>
          <TextInput
            style={{
              height: 30,
              borderWidth: 1,
              width: 160,

              borderRadius: 2,
            }}
            placeholder=""
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>UserName/LoginId:</Text>
          <TextInput
            style={{
              height: 30,
              borderWidth: 1,
              width: 160,

              borderRadius: 2,
            }}
            placeholder=""
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Password :</Text>
          <TextInput
            style={{
              height: 30,
              borderWidth: 1,
              width: 160,
              marginLeft: 10,
              borderRadius: 2,
            }}
            placeholder=""
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Contact Detail :</Text>
          <TextInput
            style={{
              height: 30,
              borderWidth: 1,
              width: 160,
              marginLeft: 10,
              borderRadius: 2,
            }}
            placeholder=""
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Email :</Text>
          <TextInput
            style={{
              height: 30,
              borderWidth: 1,
              width: 160,
              marginLeft: 10,
              borderRadius: 2,
            }}
            placeholder=""
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 50,
              width: 100,
              backgroundColor: "#eb1109",
              marginTop: 30,
              marginLeft: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="check" size={20} color="#fff" />
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 50,
              width: 100,
              backgroundColor: "#b5b4b0",
              marginTop: 30,
              marginLeft: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons name="restart" size={20} color="#fff" />
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddUserScreen;

const styles = StyleSheet.create({});
