import React from "react";
import { BottomNavTab } from "./src/navigations";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"BottomNavTab"}
      >
        <Stack.Screen name="BottomNavTab" component={BottomNavTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
