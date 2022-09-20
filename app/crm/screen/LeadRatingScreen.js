import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import LeadIndustryHeader from "../components/LeadIndustryHeader";

const LeadRatingScreen = () => {
  return (
    <View>
      <LeadIndustryHeader />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          color: "#3c67c9",
          marginTop: 15,
          marginLeft: 20,
        }}
      >
        Leads Rating
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
          <Text style={{ fontWeight: "bold" }}>Lead Rating</Text>
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
          height: 200,
          width: "90%",
          elevation: 8,
          alignSelf: "center",
          backgroundColor: "#fff",
          marginTop: 30,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Lead Rating</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Status</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Action</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14, marginLeft: 30 }}>44</Text>
          <Text style={{ fontSize: 14, marginLeft: 110 }}>1</Text>
          <View
            style={{
              marginTop: 5,
              marginLeft: 68,
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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14, marginLeft: 27 }}>Hot </Text>
          <Text style={{ fontSize: 14, marginLeft: 100 }}>1</Text>
          <View
            style={{
              marginTop: 5,
              marginLeft: 68,
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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14, marginLeft: 23 }}> Warm</Text>
          <Text style={{ fontSize: 14, marginLeft: 87 }}>1</Text>
          <View
            style={{
              marginTop: 5,
              marginLeft: 70,
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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 14, marginLeft: 23 }}>Cold</Text>
          <Text style={{ fontSize: 14, marginLeft: 100 }}>1</Text>
          <View
            style={{
              marginTop: 5,
              marginLeft: 68,
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

export default LeadRatingScreen;

const styles = StyleSheet.create({});
