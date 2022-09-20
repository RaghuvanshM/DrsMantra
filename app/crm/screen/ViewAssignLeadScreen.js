import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import LeadHeaderScreen from "../components/LeadHeaderScreen";

const ViewAssignLeadScreen = ({ navigation }) => {
  return (
    <View>
      <LeadHeaderScreen />
      <ScrollView style={{}}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "blue",
              padding: 20,
            }}
            onPress={() => navigation.navigate("NewLeadScreen")}
          >
            Add Lead
          </Text>
        </TouchableOpacity>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 80,
            width: "90%",

            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 150,
              backgroundColor: "#3a7bc9",
              marginTop: 20,
              marginLeft: 7,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("LeadScreen")}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
              View Lead
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 150,
              backgroundColor: "#e36c5f",
              marginTop: 20,
              marginLeft: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("DomesticScreen")}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
              Domestic Products
            </Text>
          </TouchableOpacity>
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
            height: 90,
            backgroundColor: "#1b1f37",
            elevation: 10,
            marginTop: 30,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#fff",
                marginLeft: 5,
              }}
            >
              Display
            </Text>
            <TouchableOpacity
              style={{
                height: 40,
                width: 70,
                backgroundColor: "#fff",
                marginLeft: 5,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text>All</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#fff",
                marginLeft: 45,
              }}
            >
              Search:
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 120,
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 5,
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
            height: 300,
            width: "90%",
            elevation: 11,
            backgroundColor: "#fff",
            alignSelf: "center",
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
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lead Name</Text>
            <Text style={{ fontSize: 15 }}>jingleinfo</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Assign User Name
            </Text>
            <Text style={{ fontSize: 15 }}>jingleinfo</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lead Owner</Text>
            <Text style={{ fontSize: 15 }}>Mukesh</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Lead Status
            </Text>
            <Text style={{ fontSize: 15 }}>Assign</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Created Date
            </Text>
            <Text style={{ fontSize: 15 }}>29/07/2022</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Updated Date
            </Text>
            <Text style={{ fontSize: 16 }}>25/06/2022</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Product Action
            </Text>
            <Text style={{ fontSize: 16 }}>Completed</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewAssignLeadScreen;

const styles = StyleSheet.create({});
