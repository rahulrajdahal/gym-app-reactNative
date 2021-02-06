import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../constants";
import { Home } from "../screens";
import { HomeIcon, Dumbbell, UserCircle } from "../constants/icons";

const Tab = createBottomTabNavigator();

const BottomNavTab = () => {
  const tabBarOptions = {
    showLable: false,
    style: { height: SIZES.height * 0.63, backgroundColor: "#D3ECEB" },
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: (focused) => (
            <Dumbbell
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.2 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: (focused) => (
            <HomeIcon
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.2 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: (focused) => (
            <UserCircle
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.2 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTab;
