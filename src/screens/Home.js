import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { Gift } from "../constants/icons";
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

  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Text>Home</Text>

        {/* Welcome Header */}
        {renderWelcomeHeader()}

        {/* Progress Indicator And Reward */}
        {renderProgress()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
