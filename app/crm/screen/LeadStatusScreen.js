import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import LeadStatusHeader from "../components/LeadStatusHeader";

const LeadStatusScreen = ({ navigation }) => {
  const [data, setData] = useState();
  return (
    <View>
      <LeadStatusHeader />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          color: "#3c67c9",
          marginTop: 15,
          marginLeft: 20,
        }}
      >
        Leads
      </Text>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          height: 60,
          width: "90%",
          backgroundColor: "#fff",
          elevation: 8,
          alignSelf: "center",
          marginTop: 20,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Leads</Text>
          <TouchableOpacity>
            <FontAwesome name="plus" size={25} color="#2961e3" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          height: 100,
          width: "90%",
          backgroundColor: "#fff",
          elevation: 8,
          alignSelf: "center",
          marginTop: 20,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Name</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Status</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Action</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Mohan Kumar</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 20 }}>
            1
          </Text>
          <View
            style={{
              marginTop: 5,
              marginLeft: 90,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <FontAwesome name="edit" size={25} color="#1754e3" />
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

export default LeadStatusScreen;

const styles = StyleSheet.create({});
