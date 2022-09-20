import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderScreen from "../components/HeaderScreen";
const AssignLeadScreen = () => {
  return (
    <View>
      <HeaderScreen />
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          height: 90,
          elevation: 7,
          backgroundColor: "#09011c",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: 3,
            }}
          >
            Display
          </Text>
          <TouchableOpacity
            style={{
              height: 40,
              width: 50,
              backgroundColor: "#fff",
              justifyContent: "center",
              padding: 10,
              marginLeft: 2,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>All</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#fff",
              marginLeft: 5,
              marginTop: 10,
            }}
          >
            records
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#fff",
              marginTop: 10,
            }}
          >
            search:
          </Text>
          <TextInput
            style={{
              color: "#fff",
              borderWidth: 1,
              borderColor: "#fff",
              width: 100,
              height: 40,
              borderRadius: 10,
              marginLeft: 5,
            }}
            placeholder=""
          />
        </View>
      </View>
      <Text
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 18,
          color: "blue",
          marginLeft: 18,
        }}
      >
        Lead Details
      </Text>
      <ScrollView>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            height: 280,
            width: "90%",
            elevation: 8,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 10,
            padding: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}> Name</Text>
            <Text style={{ fontSize: 14 }}> Rohit Kumart Mishra</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}> Mobile</Text>
            <Text style={{ fontSize: 14 }}> 7355163605</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}> Email</Text>
            <Text style={{ fontSize: 14 }}> abc@gmail.com</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Status</Text>
            <Text style={{ fontSize: 14 }}>Assign</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              {" "}
              Assign Name
            </Text>
            <Text style={{ fontSize: 14 }}> Dev</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 20 }}>
              Assign Lead
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TextInput
                style={{
                  fontSize: 11,
                  borderWidth: 1,
                  borderColor: "red",
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 10,
                }}
                placeholder="Select User To Assign"
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#9e9d99",
              alignSelf: "flex-end",
              marginTop: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
              Summit
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 15,
            width: "90%",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          Animations allow you to convey physically believable motion in your
          interface. React Native provides two complementary animation systems:
          Animated for granular and interactive control of specific values, and
          LayoutAnimation for animated global layout transactions. Animations
        </Text>
      </ScrollView>
    </View>
  );
};

export default AssignLeadScreen;

const styles = StyleSheet.create({});
