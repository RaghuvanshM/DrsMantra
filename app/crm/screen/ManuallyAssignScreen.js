import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import ManuallyAssignHeader from "../components/ManuallyAssignHeader";

const ManuallyAssignScreen = () => {
  return (
    <View>
      <ManuallyAssignHeader />
      <TouchableOpacity>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontWeight: "bold",
            fontSize: 14,
            color: "#0535f7",
          }}
        >
          Lead details
        </Text>
      </TouchableOpacity>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          height: 90,
          backgroundColor: "#2e1942",
          marginTop: 20,
          elevation: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            color: "#fff",
            marginLeft: 4,
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
            marginLeft: 5,
            borderRadius: 5,
          }}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 13,
            marginLeft: 5,
          }}
        >
          records
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: "#fff",
              marginLeft: 15,
            }}
          >
            Search:
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              height: 30,
              width: 100,
              borderColor: "#fff",
              borderRadius: 1,
              marginLeft: 5,
            }}
            placeholder=""
          />
        </View>
      </View>

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
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Email</Text>
          <Text style={{ fontSize: 15 }}>abc@gmail.com</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Status</Text>
          <Text style={{ fontSize: 15 }}>Not Assign</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Assign Name</Text>
          <Text style={{ fontSize: 15 }}>Dev Babu</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>Assign Lead</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 10 }}>
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
            height: 30,
            width: 70,
            backgroundColor: "#9e9d99",
            alignSelf: "flex-end",
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 13, color: "#fff" }}>
            Summit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManuallyAssignScreen;

const styles = StyleSheet.create({});
