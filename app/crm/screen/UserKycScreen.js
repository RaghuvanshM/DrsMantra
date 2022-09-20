import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import KycHeader from "../components/KycHeader";

const UserKycScreen = () => {
  return (
    <View>
      <KycHeader />
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          height: 50,
          elevation: 9,
          backgroundColor: "#190b3b",
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: "#fff",
              marginTop: 5,
            }}
          >
            Display
          </Text>
          <TouchableOpacity
            style={{
              height: 30,
              width: 50,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              borderRadius: 5,
            }}
          >
            <Text>All</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              marginTop: 5,
              marginLeft: 5,
            }}
          >
            records
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                marginTop: 5,
                marginLeft: 20,
              }}
            >
              Search:
            </Text>
            <TextInput
              style={{
                height: 30,
                width: 90,
                borderWidth: 1,
                borderColor: "#fff",
                marginLeft: 5,
                borderRadius: 5,
              }}
              placeholder=""
            />
          </View>
        </View>
      </View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          height: 320,
          width: "90%",
          elevation: 9,
          backgroundColor: "#fff",
          marginTop: 30,
          alignSelf: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Name </Text>
          <Text style={{ fontSize: 15 }}>Dev Babu </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Company Name</Text>
          <Text style={{ fontSize: 15 }}>Dev Babu </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Text No </Text>
          <Text style={{ fontSize: 15 }}>23456Tyio </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Mobile </Text>
          <Text style={{ fontSize: 15 }}>7355163605 </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Email </Text>
          <Text style={{ fontSize: 15 }}>dev@devika.com </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Kyc Verification
          </Text>
          <Text style={{ fontSize: 15 }}>Approved </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>
            Action{" "}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity>
              <FontAwesome name="eye" size={25} color="#f79502" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="pencil" size={25} color="#f79502" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="delete" size={25} color="#f71302" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20 }}>
            Message To User
          </Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "red",
              justifyContent: "space-between",
              width: 90,
              padding: 10,
              marginTop: 10,
              borderRadius: 7,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Fontisto name="paper-plane" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserKycScreen;

const styles = StyleSheet.create({});
