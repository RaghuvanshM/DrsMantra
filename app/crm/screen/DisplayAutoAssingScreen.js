import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import AutoAssignHeader from "../components/AutoAssignHeader";

const DisplayAutoAssingScreen = ({ navigation }) => {
  return (
    <View>
      <AutoAssignHeader />
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          height: 50,
          elevation: 8,
          backgroundColor: "#fff",
          marginTop: 60,
        }}
      ></View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          height: 200,
          elevation: 8,
          backgroundColor: "#fff",
          marginTop: 20,
          width: "90%",
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
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Lead Name</Text>
          <Text style={{ fontSize: 14 }}>TexAMS</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Assign Name</Text>
          <Text style={{ fontSize: 14 }}>Dev Sultania</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Lead Owner</Text>
          <Text style={{ fontSize: 14 }}>TexAMS</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Assign Date</Text>
          <Text style={{ fontSize: 14 }}>30/07/2022</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Action</Text>

          <View
            style={{
              marginTop: 5,
              marginLeft: 90,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("LeadActivityScreen")}
            >
              <FontAwesome name="edit" size={25} color="#f28305" />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="delete" size={25} color="#f71307" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DisplayAutoAssingScreen;

const styles = StyleSheet.create({});
