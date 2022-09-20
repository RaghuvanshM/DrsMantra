import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const ManageLeadScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{ padding: 10 }}>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("LeadScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Leads</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("ViewAssignLeadScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Views Assing Leads
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("LeadStatusScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            ManageLead Status
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("DisplayAutoAssingScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Display Auto Assing Leads
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("LeadIndustryScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Lead Industry
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("LeadRatingScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lead Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("LeadSourceScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lead Source</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 50,
            width: "90%",
            elevation: 9,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("ManuallyAssignScreen")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Manually Assign Lead
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 150,
          }}
        ></View>
      </ScrollView>
    </View>
  );
};

export default ManageLeadScreen;

const styles = StyleSheet.create({});
