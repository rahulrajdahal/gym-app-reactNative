import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { Gift, Flag } from "../constants/icons";
import { Profile } from "../constants/images";

const Home = () => {
  function renderWelcomeHeader() {
    return (
      <View
        style={{
          marginTop: 87,
          marginHorizontal: 40,
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 295,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#000000", ...FONTS.h2, fontWeight: "300" }}>
            Good Evening,
          </Text>
          <Text style={{ color: "#000000", ...FONTS.h2, fontWeight: "700" }}>
            Aakash
          </Text>
        </View>
        <Profile />
      </View>
    );
  }

  function renderProgress() {
    return (
      <View
        style={{
          width: 295,
          height: 84,
          marginTop: 84,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 254,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary,
              opacity: 0.2,
              width: 58,
              height: 58,
              borderRadius: SIZES.boderRadius,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Gift style={{ color: COLORS.primary, opacity: 1 }} />
          </View>
          <Text
            style={{
              marginLeft: 12,
              marginRight: 41,
              color: "#9A9A9A",
              ...FONTS.body1,
              fontWeight: "500",
              width: 184,
            }}
          >
            You’re 23 hours away from your reward
          </Text>
        </View>
        <View
          style={{
            marginTop: 16,
            width: 295,
            height: 10,
            borderRadius: 9.5,
            backgroundColor: "#E7E7E7",
          }}
        >
          <View
            style={{
              width: 212,
              height: 10,
              borderRadius: 9.5,
              backgroundColor: COLORS.primary,
            }}
          ></View>
        </View>
      </View>
    );
  }

  function renderActivity() {
    return (
      <View
        style={{
          marginTop: 35,
          marginLeft: 27,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Flag style={{ color: "rgba(255, 73, 58, 0.2)" }} />
          <Text style={{ color: "#656565", ...FONTS.body1, marginLeft: 7.8 }}>
            You’re doing great so far:
          </Text>
        </View>
        <View
          style={{
            marginTop: 21,
            width: 374,
            height: 111,
            paddingRight: 15,
            paddingLeft: 24,
            paddingTop: 13,
            paddingBottom: 8,
            shadowRadius: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 365,
              height: 106,
              backgroundColor: "#F0EBEB",
              borderRadius: SIZES.boderRadius,
              paddingTop: 11,
              paddingBottom: 40,
              paddingLeft: 10,
              paddingRight: 73,
              elevation: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: 66,
                height: 55,
              }}
            >
              <Text
                style={{ color: "#262626", ...FONTS.body1, fontWeight: "300" }}
              >
                Average
              </Text>
              <Text
                style={{
                  color: "rgba(36, 161, 156, 0.4)",
                  ...FONTS.h1,
                  lineHeight: 40,
                  fontWeight: "bold",
                }}
              >
                8.0
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: 66,
                height: 55,
              }}
            >
              <Text
                style={{ color: "#262626", ...FONTS.body1, fontWeight: "300" }}
              >
                Goal
              </Text>
              <Text
                style={{
                  color: "rgba(36, 161, 156, 0.4)",
                  ...FONTS.h1,
                  lineHeight: 40,
                  fontWeight: "bold",
                }}
              >
                8
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: 66,
                height: 55,
              }}
            >
              <Text
                style={{ color: "#262626", ...FONTS.body1, fontWeight: "300" }}
              >
                Total
              </Text>
              <Text
                style={{
                  color: "rgba(36, 161, 156, 0.4)",
                  ...FONTS.h1,
                  lineHeight: 40,
                  fontWeight: "bold",
                }}
              >
                200
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        {/* Welcome Header */}
        {renderWelcomeHeader()}

        {/* Progress Indicator And Reward */}
        {renderProgress()}

        {/* Activity  */}
        {renderActivity()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
