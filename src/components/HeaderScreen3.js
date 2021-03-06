import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const HeaderScreen3 = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <Text>Change Beat</Text>
      </View>
    </View>
  );
};

export default HeaderScreen3;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    borderBottomWidth: 0.3,
  },
});
