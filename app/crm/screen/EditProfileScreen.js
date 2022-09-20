import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EditProfileHeader from "../components/EditProfileHeader";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const EditProfileScreen = () => {
  return (
    <View>
      <EditProfileHeader />
      <Text style={{ padding: 20, fontWeight: "bold", fontSize: 17 }}>
        Edit User Profile
      </Text>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          height: 10,
          width: "90%",
          backgroundColor: "#dff0d8",
          elevation: 13,
          alignSelf: "center",
        }}
      ></View>
      <ScrollView>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,
            height: 900,
            width: "90%",
            backgroundColor: "#fff",
            elevation: 13,
            alignSelf: "center",
            borderWidth: 1,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 5 }}>
            <TouchableOpacity>
              <FontAwesome name="edit" size={25} color="#faf207" />
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
              Basic Info
            </Text>
          </View>

          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,
              height: 50,

              backgroundColor: "#f5f5f0",
              elevation: 9,

              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 17,
                color: "#028ffa",
              }}
            >
              General
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
            }}
          >
            <Image
              style={{
                height: 200,
                width: 200,
                alignSelf: "center",
              }}
              source={require("../../crm/assets/image.png")}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", marginTop: 25, marginLeft: 20 }}>
              Name :
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 200,
                borderWidth: 1,
                marginTop: 20,
                marginLeft: 35,
                padding: 7,
              }}
              placeholder="Administrator"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", marginTop: 25, marginLeft: 10 }}>
              User Name :
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 200,
                borderWidth: 1,
                marginTop: 20,
                marginLeft: 5,
                padding: 7,
              }}
              placeholder="Administrator"
            />
          </View>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,
              height: 50,

              backgroundColor: "#f5f5f0",
              elevation: 9,

              marginTop: 30,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 17,
                color: "#028ffa",
              }}
            >
              Contact
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", marginTop: 35, marginLeft: 10 }}>
              Email :
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 220,
                borderWidth: 1,
                marginTop: 30,
                marginLeft: 7,
                padding: 7,
              }}
              placeholder="admin@admin.com"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", marginTop: 35, marginLeft: 10 }}>
              Phone :
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 220,
                borderWidth: 1,
                marginTop: 30,
                marginLeft: 5,
                padding: 7,
              }}
              placeholder="1234567890"
            />
          </View>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,
              height: 100,

              backgroundColor: "#f5f5f0",
              elevation: 9,

              marginTop: 30,
              justifyContent: "center",
            }}
          >
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
                  marginTop: 10,
                  marginLeft: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="check" size={20} color="#fff" />
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Submit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 50,
                  width: 100,
                  backgroundColor: "#b5b4b0",
                  marginTop: 10,
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
        <View style={{ height: 300 }}></View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({});
