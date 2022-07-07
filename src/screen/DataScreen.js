import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import HeaderScreen2 from "../components/HeaderScreen2";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DataScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderScreen2 navigation={navigation} />
      <ScrollView style={{ padding: 5 }}>
        <View
          style={{
            height: "25%",
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#fff",
            marginTop: "80%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="dot-single" size={40} color="red" />
            <Text>Live Performance Summary</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginRight: 5,
            }}
          >
            <Text style={styles.text}>22</Text>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>0</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text>SC</Text>
            <Text>TC</Text>
            <Text>PC</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 5,
            }}
          >
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>0</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text>NET VALUE</Text>
            <Text>STD UNIT</Text>
            <Text>LPC</Text>
          </View>
        </View>
        <View
          style={{
            height: 70,
            width: "100%",
            backgroundColor: "lightblue",
            marginTop: "20%",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Ionicons name="football" size={25} color="red" />
            <MaterialIcons name="local-phone" size={25} color="#036eb6" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text>Live Test</Text>
            <Text>Telephonic</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#036eb6",
            height: 50,
            width: "99%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("RetailingScreen")}
        >
          <Text style={{ color: "#fff" }}>SELECT CALL</Text>
          <Ionicons name="arrow-forward" size={28} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
