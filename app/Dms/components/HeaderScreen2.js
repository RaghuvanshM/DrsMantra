import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HeaderScreen2 = ({ navigation }) => {
  return (
    <View>
      <View
        style={{ height: 50, backgroundColor: "#fff", borderBottomWidth: 0.5 }}
      >
        <View style={styles.heder}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Entypo name="menu" size={30} color="#036eb6" />
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>Selectet Beat</Text>
          </View>

          <FontAwesome5 name="bolt" size={25} color="white" />
          <EvilIcons name="search" size={25} color="white" />
          <TouchableOpacity>
            <Entypo name="check" size={25} color="white" />
          </TouchableOpacity>

          <Entypo name="dots-three-vertical" size={20} color="white" />
        </View>
      </View>
    </View>
  );
};

export default HeaderScreen2;

const styles = StyleSheet.create({
  heder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
