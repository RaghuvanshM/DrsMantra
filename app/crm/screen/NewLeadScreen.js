import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import HeaderScreen from "../components/HeaderScreen";

const NewLeadScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderScreen />
      <ScrollView>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,
            height: 220,
            width: "90%",
            elevation: 10,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            padding: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                height: 40,
                width: 170,
                backgroundColor: "#4879b0",

                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                Lead Creations steps
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 40,
                width: 125,
                backgroundColor: "#4879b0",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                Views Leads
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                height: 40,
                width: 150,
                backgroundColor: "#4879b0",

                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                Add Leads
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 150,
                backgroundColor: "#4879b0",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                Assign Lead
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                height: 40,
                width: 150,
                backgroundColor: "#4879b0",

                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                Add Leads
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 150,
                backgroundColor: "#4879b0",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                Assign Lead
              </Text>
            </TouchableOpacity>
          </View>
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
            height: 1500,
            width: "90%",
            elevation: 10,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
            Lead Information
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Company
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Select Any One"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Lead Status
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="New"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Lead Source
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="dd110"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Division
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Select Division"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Lead Owner
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="admin"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Full Name
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Rohit Kumar"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Email
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="abc@gmail.com"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Date
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="dd/mm/yyyy"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Phone
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="7355163605"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Full Address
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Full Address"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              State
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Select Country first"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              City
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Select State first"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Zip/Pin Code
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Zip/Pin Code"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 10 }}>
              Additional Information
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fc0509" }}>*</Text>
          </View>

          <View>
            <TextInput
              style={{
                borderWidth: 1,
                width: "92%",
                borderColor: "#fc0509",
                marginLeft: 10,
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Additional Information"
            />
          </View>
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              height: 100,
              elevation: 8,
              backgroundColor: "#9fa2a6",
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                height: 60,
                width: 100,
                backgroundColor: "#b01515",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: 90,
                backgroundColor: "#23a82a",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                marginLeft: 5,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewLeadScreen;

const styles = StyleSheet.create({});
