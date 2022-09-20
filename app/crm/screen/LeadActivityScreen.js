import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import HeaderScreen from "../components/HeaderScreen";

const LeadActivityScreen = () => {
  const [isFullFirst, setisFullFirst] = useState(false);
  const [isFullSecond, setisFullSecond] = useState(false);
  const [isFullThird, setisFullThird] = useState(false);
  const [isFullFourth, setisFullFourth] = useState(false);
  return (
    <View>
      <HeaderScreen />
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          height: 10,
          elevation: 4,
          backgroundColor: "#5fc9c9",
          marginTop: 10,
        }}
      ></View>
      <ScrollView styles={{ paddingBottom: 40 }}>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 180,
            width: "85%",
            elevation: 9,
            backgroundColor: "#fff",
            marginTop: 20,
            alignSelf: "center",
            borderRadius: 5,

            padding: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>CTI-NO.</Text>
            <Text style={{ fontSize: 13 }}>CTIDNO-5342</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Product Main Category
            </Text>
            <Text style={{ fontSize: 13 }}>Yarns</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Source</Text>
            <Text style={{ fontSize: 13 }}>skype</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Country</Text>
            <Text style={{ fontSize: 13 }}>India</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Lead Status
            </Text>
            <Text style={{ fontSize: 13 }}>New</Text>
          </View>
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,
            height: 200,
            width: "90%",
            elevation: 13,
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: 30,
            padding: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Name</Text>
            <Text style={{ fontSize: 13 }}>Vikas kumar Shukla</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Mobile</Text>
            <Text style={{ fontSize: 13 }}>7355163605</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Email</Text>
            <Text style={{ fontSize: 13 }}>abc@gmail.com</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Company Name
            </Text>
            <Text style={{ fontSize: 13 }}>Himalya Textile</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Created Date
            </Text>
            <Text style={{ fontSize: 13 }}>28-july2022</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Assign Name
            </Text>
            <Text style={{ fontSize: 13 }}>Dev singh Rana</Text>
          </View>
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,
            height: 150,
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
                width: 70,
                backgroundColor: "#2ff53c",
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Old
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 70,
                backgroundColor: "#2ff53c",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                End
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 70,
                backgroundColor: "#2ff53c",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Pending
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 70,
                backgroundColor: "#2ff53c",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                New
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
                width: 90,
                backgroundColor: "#291f7d",

                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Working
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 100,
                backgroundColor: "#4555e6",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Converted
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 110,
                backgroundColor: "#fa050d",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Current Status
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 20,
              marginLeft: 30,
            }}
          >
            KEY FIELDS
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 5,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Lead Status
        </Text>
        <View
          style={{
            marginLeft: 30,
          }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              width: "94%",
              fontSize: 14,
              marginTop: 5,
              borderColor: "#e3070e",
              padding: 10,
            }}
            placeholder="New"
          />
        </View>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 5,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Lead Owner
        </Text>
        <View
          style={{
            marginLeft: 30,
          }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              width: "94%",
              fontSize: 14,
              marginTop: 5,
              borderColor: "#e3070e",
              padding: 10,
            }}
            placeholder="admin@admin.com"
          />
        </View>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 5,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Website
        </Text>
        <View
          style={{
            marginLeft: 30,
          }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              width: "94%",
              fontSize: 14,
              marginTop: 5,
              borderColor: "#e3070e",
              padding: 10,
            }}
            placeholder="xyz.com"
          />
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            height: 100,
            elevation: 4,
            backgroundColor: "#ede9e8;",
            marginTop: 20,
            width: "90%",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 55,
              width: 110,
              backgroundColor: "#fc1703",
              marginLeft: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 45,
              width: 90,
              backgroundColor: "#0366fc",

              alignItems: "center",
              justifyContent: "center",
              marginLeft: 7,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 15,
            marginLeft: 30,
          }}
        >
          ACTIVITY
        </Text>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            height: 670,
            elevation: 9,
            backgroundColor: "#fff",
            width: "90%",
            alignSelf: "center",
            marginTop: 10,
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
                width: 100,
                backgroundColor: "#4f5f7d",
                marginTop: 5,
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Log a call
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 90,
                backgroundColor: "#e0dede",
                marginTop: 5,
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                New Task
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 90,
                backgroundColor: "#e0dede",
                marginTop: 5,
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#000" }}>
                New Event
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 30,
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Subject</Text>
            <TextInput
              style={{
                width: "90%",
                borderWidth: 1,
                borderColor: "#f21602",
                marginTop: 10,
                fontSize: 14,
                padding: 10,
              }}
              placeholder="subject"
            />
          </View>
          <View
            style={{
              marginLeft: 30,
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Comments</Text>
            <TextInput
              style={{
                width: "90%",
                borderWidth: 1,
                borderColor: "#f21602",
                marginTop: 10,
                fontSize: 14,
                padding: 10,
              }}
              placeholder="Comments"
            />
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Name</Text>
            <TextInput
              style={{
                borderWidth: 1,
                width: "90%",
                borderColor: "#f51702",
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Name"
            />
            <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 10 }}>
              Related To
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                width: "90%",
                borderColor: "#f51702",
                marginTop: 10,
                padding: 10,
              }}
              placeholder="Related to"
            />
            <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 10 }}>
              cts_no.
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                width: "90%",
                borderColor: "#f51702",
                marginTop: 10,
                padding: 10,
              }}
              placeholder="CTIDNO-5432"
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
              backgroundColor: "#ebe8e8",
              elevation: 5,
              marginTop: 20,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                height: 60,
                width: 100,
                backgroundColor: "#e60",
                marginLeft: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: 90,
                backgroundColor: "#e60805",

                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Feather name="check-square" size={20} color="#fff" />
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: "90%",
            backgroundColor: "#4f5f7d",
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setisFullFirst(!isFullFirst);
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
            Files
          </Text>
        </TouchableOpacity>
        {isFullFirst && (
          <View>
            <Text style={{ width: "90%", alignSelf: "center" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            height: 40,
            width: "90%",
            backgroundColor: "#4f5f7d",
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setisFullSecond(!isFullSecond);
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
            Logs
          </Text>
        </TouchableOpacity>
        {isFullSecond && (
          <View>
            <Text style={{ width: "90%", alignSelf: "center" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            height: 40,
            width: "90%",
            backgroundColor: "#4f5f7d",
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setisFullThird(!isFullThird);
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
            Task
          </Text>
        </TouchableOpacity>
        {isFullThird && (
          <View>
            <Text style={{ width: "90%", alignSelf: "center" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            height: 40,
            width: "90%",
            backgroundColor: "#4f5f7d",
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setisFullFourth(!isFullFourth);
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
            Event
          </Text>
        </TouchableOpacity>
        {isFullFourth && (
          <View>
            <Text style={{ width: "90%", alignSelf: "center" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </Text>
          </View>
        )}

        <View style={{ height: 200 }}></View>
      </ScrollView>
    </View>
  );
};

export default LeadActivityScreen;
const SingleItem = ({ itemkey, itemValue }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>{itemkey}</Text>
      <Text style={{ fontSize: 15 }}>{itemValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
