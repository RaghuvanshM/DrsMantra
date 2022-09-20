import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProfileHeader from "../components/ProfileHeader";

const ProfileScreen = () => {
  return (
    <View>
      <ProfileHeader />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 17,
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        User Profile
      </Text>
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

        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            height: 40,
            elevation: 8,
            width: "60%",
            backgroundColor: "#5e9bd1",
            alignSelf: "center",
            marginLeft: 25,
            marginTop: 2,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              style={{ alignSelf: "center", marginTop: 3 }}
              name="circle"
              size={15}
              color="#a6bd35"
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#fff",
                marginLeft: 10,
                marginTop: 2,
              }}
            >
              Administrator
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          height: 280,
          width: "90%",
          elevation: 10,
          alignSelf: "center",
          backgroundColor: "#fff",
          marginTop: 20,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              height: 30,
              width: 110,
              backgroundColor: "#EDF3F4",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", marginTop: 2 }}>Name</Text>
          </View>
          <Text style={{ fontSize: 16 }}>Administrator</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              height: 30,
              width: 110,
              backgroundColor: "#EDF3F4",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", marginTop: 2 }}>UserName</Text>
          </View>
          <Text style={{ fontSize: 16, marginTop: 3 }}>Administrator</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              height: 30,
              width: 110,
              backgroundColor: "#EDF3F4",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", marginTop: 2 }}>Email</Text>
          </View>
          <Text style={{ fontSize: 16, marginTop: 3 }}>admin@admin.com</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              height: 30,
              width: 110,
              backgroundColor: "#EDF3F4",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", marginTop: 2 }}>Mobile</Text>
          </View>
          <Text style={{ fontSize: 16, marginTop: 3 }}>1234567890</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              height: 30,
              width: 110,
              backgroundColor: "#EDF3F4",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", marginTop: 2 }}>
              Designation
            </Text>
          </View>
          <Text style={{ fontSize: 16, marginTop: 3 }}>Administrator</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              height: 30,
              width: 110,
              backgroundColor: "#EDF3F4",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", marginTop: 2 }}>joined</Text>
          </View>
          <Text style={{ fontSize: 16, marginTop: 3 }}>04/08/2022</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
