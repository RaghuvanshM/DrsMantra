import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import LeadHeaderScreen from "../components/LeadHeaderScreen";

const DomesticScreen = () => {
  return (
    <View>
      <LeadHeaderScreen />
      <TouchableOpacity
        style={{
          height: 40,
          width: 200,
          backgroundColor: "#5d61d4",
          marginTop: 15,
          marginLeft: 17,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Display Domestic Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 17 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "#33abf5",
            marginTop: 8,
          }}
        >
          Add domestic Products
        </Text>
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
          elevation: 11,
          backgroundColor: "#fff",
          alignSelf: "center",
          marginTop: 20,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Customer Name
          </Text>
          <Text style={{ fontSize: 15 }}>Mohit Kumar</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Location</Text>
          <Text style={{ fontSize: 15 }}>Noida</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>DOI</Text>
          <Text style={{ fontSize: 15 }}>29/07/2022</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Months</Text>
          <Text style={{ fontSize: 15 }}>july</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>FY Year</Text>
          <Text style={{ fontSize: 15 }}>29/07/2022</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>region</Text>
          <Text style={{ fontSize: 15 }}>Ralsfddf</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Type</Text>
          <Text style={{ fontSize: 15 }}>xyz</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>sad</Text>
          <Text style={{ fontSize: 15 }}>Sub Agent</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Product Description
          </Text>
          <Text style={{ fontSize: 15 }}>abcdef</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Quantity</Text>
          <Text style={{ fontSize: 15 }}>40</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Uok</Text>
          <Text style={{ fontSize: 15 }}>MT</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Action</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <FontAwesome name="edit" size={23} color="#ed890e" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="delete" size={23} color="#ed210e" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="rocket" size={23} color="#ed3f0e" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DomesticScreen;

const styles = StyleSheet.create({});
