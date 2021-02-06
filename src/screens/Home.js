import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS, FONTS } from "../constants";
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

  return (
    <SafeAreaView>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Text>Home</Text>

        {/* Welcome Header */}
        {renderWelcomeHeader()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
