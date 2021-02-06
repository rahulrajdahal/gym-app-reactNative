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
    style: {
      elevation: 0,
      marginBottom: 54,
      width: 335,
      height: 63,
      backgroundColor: COLORS.lightGreen,
      borderRadius: 31.5,
      marginHorizontal: 20,
      alignSelf: "center",
    },
  };

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Dumbbell"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Dumbbell
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <UserCircle
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTab;
