import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import LeadSourceHeader from "../components/LeadSourceHeader";

const LeadSourceScreen = () => {
  return (
    <View>
      <LeadSourceHeader />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          color: "#3c67c9",
          marginTop: 15,
          marginLeft: 20,
        }}
      >
        Lead Source
      </Text>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          height: 60,
          width: "90%",
          backgroundColor: "#fff",
          elevation: 8,
          alignSelf: "center",
          marginTop: 20,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Lead Source</Text>
          <TouchableOpacity>
            <FontAwesome name="plus" size={25} color="#2961e3" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            height: 800,
            width: "90%",
            elevation: 8,
            alignSelf: "center",
            backgroundColor: "#fff",
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
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              Lead Source
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Status</Text>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Action</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>ddddd1</Text>
            <Text style={{ fontSize: 14, marginLeft: 90 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>others </Text>
            <Text style={{ fontSize: 14, marginLeft: 90 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Volza Database</Text>
            <Text style={{ fontSize: 14, marginLeft: 30 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 70,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Email Marketing</Text>
            <Text style={{ fontSize: 14, marginLeft: 30 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Online Leads </Text>
            <Text style={{ fontSize: 14, marginLeft: 50 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Customer Referral </Text>
            <Text style={{ fontSize: 14, marginLeft: 10 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Instagram</Text>
            <Text style={{ fontSize: 14, marginLeft: 70 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 70,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Whatsapp</Text>
            <Text style={{ fontSize: 14, marginLeft: 60 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Teliphonic Calls</Text>
            <Text style={{ fontSize: 14, marginLeft: 20 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Database</Text>
            <Text style={{ fontSize: 14, marginLeft: 60 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Kakao Talk</Text>
            <Text style={{ fontSize: 14, marginLeft: 50 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Webite-Contact Form</Text>
            <Text style={{ fontSize: 14 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Website-Broucher</Text>
            <Text style={{ fontSize: 14, marginLeft: 5 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Customer-Event</Text>
            <Text style={{ fontSize: 14, marginLeft: 10 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>FaceBook</Text>
            <Text style={{ fontSize: 14, marginLeft: 50 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Linkdin</Text>
            <Text style={{ fontSize: 14, marginLeft: 70 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14 }}>Employee-Referral</Text>
            <Text style={{ fontSize: 14 }}>1</Text>
            <View
              style={{
                marginTop: 5,
                marginLeft: 68,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="edit" size={25} color="#1754e3" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="delete" size={25} color="#f71307" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LeadSourceScreen;

const styles = StyleSheet.create({});
