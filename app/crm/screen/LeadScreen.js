import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderScreen from "../components/HeaderScreen";
const data = [
  {
    id: 1,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 2,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 3,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 4,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 5,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 6,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 7,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 8,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 9,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
  {
    id: 10,
    name: "xyz",
    email: "xy@gmail.com",
    company: "jingle",
    mobno: "789878787",
    leadstatus: "new",
    assigntolead: "akjfkajdf",
  },
];

const LeadScreen = ({ navigation }) => {
  const [allData, setAlldata] = useState(data);
  const deleteItem = (item) => {
    let { id } = item;
    let newData = [...allData];
    let filter = newData.filter((a) => a.id != item.id);
    setAlldata(filter);
  };
  return (
    <View style={{ flex: 1 }}>
      <HeaderScreen />
      <TouchableOpacity
        style={{ marginTop: 20, marginLeft: 10 }}
        onPress={() => navigation.navigate("NewLeadScreen")}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#064bd4" }}>
          Add New Lead
        </Text>
      </TouchableOpacity>
      <FlatList
        data={allData}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                height: 250,
                backgroundColor: "white",
                elevation: 10,
                marginTop: 20,
                padding: 20,
              }}
            >
              <SingleItem itemkey={"Name"} itemValue={item.name} />
              <SingleItem itemkey={"Company"} itemValue={item.company} />
              <SingleItem itemkey={"Mobile"} itemValue={item.mobno} />
              <SingleItem itemkey={"Email"} itemValue={item.email} />
              <SingleItem itemkey={"Lead status"} itemValue={item.leadstatus} />
              <SingleItem
                itemkey={"Assign to lead"}
                itemValue={item.assigntolead}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("LeadActivityScreen")}
                >
                  <FontAwesome
                    style={{}}
                    name="edit"
                    size={25}
                    color="#fae13c"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteItem(item);
                  }}
                >
                  <AntDesign
                    style={{ marginLeft: 5 }}
                    name="delete"
                    size={25}
                    color="#f02b45"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("AssignLeadScreen")}
                >
                  <FontAwesome
                    style={{ marginLeft: 5 }}
                    name="rocket"
                    size={25}
                    color="#fa3614"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LeadScreen;
const SingleItem = ({ itemkey, itemValue }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>{itemkey}</Text>
      <Text style={{ fontSize: 15 }}>{itemValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
