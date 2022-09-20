import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const CrmScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
          onPress={() => navigation.navigate("UserKycScreen")}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="user"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              User Kyc Details
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
          onPress={() => navigation.navigate("UsermgtScreen")}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="user"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              User ManageMent
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="users"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Level ManageMents
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="star"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Child ManageMent
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="star"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Parent ManageMent
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 5 }}
              name="list"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Menu
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Ionicons style={{ marginLeft: 10 }} name="list" size={25} />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Master
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
          onPress={() => navigation.navigate("ManageLeadScreen")}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="eye"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Lead
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="user"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Account
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="rocket"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Oppartunity
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Ionicons
              style={{ marginLeft: 10, marginTop: 3 }}
              name="call"
              size={25}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Contact
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="shield"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Quotes
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="edit"
              size={25}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Notes
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Ionicons
              style={{ marginLeft: 10, marginTop: 3 }}
              name="mail"
              size={25}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Converstation
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome5
              style={{ marginLeft: 10, marginTop: 3 }}
              name="chart-area"
              size={25}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              User Category
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="user"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Category
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="user"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Product Master
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="check"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Manage Suplier
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowColor: "#7ca8e6",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            height: 50,
            width: "90%",
            elevation: 12,
            backgroundColor: "#f2f4f7",
            marginTop: 40,
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "#7ca8e6",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10, marginTop: 3 }}
              name="user"
              size={20}
            />
            <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 16 }}>
              Company
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: 100,
          }}
        ></View>
      </ScrollView>
    </View>
  );
};

export default CrmScreen;

const styles = StyleSheet.create({});
