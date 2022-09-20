import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const ContinueScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 50,
          width: "100%",
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign
          style={{ marginLeft: 10 }}
          name="arrowleft"
          size={25}
          color="#000"
        />
        <Text style={{ marginLeft: 10 }}>Select Route</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: "10%",
            width: "97%",
            borderRadius: 20,
            borderColor: "green",
          }}
          placeholder="Enter Route Name Here"
        />
      </View>
      <ScrollView style={{ padding: 7 }}>
        <TouchableOpacity
          style={{
            height: 60,
            width: "95%",
            borderWidth: 2,
            marginTop: "12%",
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
            borderColor: "green",
          }}
        >
          <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
            Ballabhgarh
          </Text>
          <Text style={{ marginLeft: 10 }}>soumya Traders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: "95%",
            borderWidth: 2,
            marginTop: "12%",
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
            borderColor: "green",
          }}
        >
          <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
            New Ashok Nagar
          </Text>
          <Text style={{ marginLeft: 10 }}>soumya Traders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: "95%",
            borderWidth: 2,
            marginTop: "12%",
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
            borderColor: "green",
          }}
        >
          <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
            Khan Market
          </Text>
          <Text style={{ marginLeft: 10 }}>soumya Traders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: "95%",
            borderWidth: 2,
            marginTop: "12%",
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
            borderColor: "green",
          }}
        >
          <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
            SarojniNagar Market
          </Text>
          <Text style={{ marginLeft: 10 }}>soumya Traders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: "97%",
            alignItems: "center",
            backgroundColor: "#036eb6",
            marginTop: "15%",
            alignSelf: "center",
            borderRadius: 5,
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() =>navigation.replace('DmsAppStack')}
        >
          <Text style={{ color: "#fff" }}>SELECT THIS ROUTE</Text>
          <AntDesign name="arrowright" size={25} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ContinueScreen;

const styles = StyleSheet.create({});
