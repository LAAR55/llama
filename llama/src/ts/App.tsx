import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, NavigationRouteConfigMap, StackNavigatorConfig } from "react-navigation";

import { HomeScreen } from "./Screens";

const screens: NavigationRouteConfigMap = {
  Home: {
    screen: HomeScreen,
  },
};

// tslint:disable:object-literal-sort-keys
const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#222f92",
      borderBottomWidth: 0,
      paddingHorizontal: 20,
    },
    headerTintColor: "#ffffff",
    headerBackTitle: null,
  },
};

const appNavigator = createStackNavigator(screens, navigatorConfig);

export default appNavigator;
