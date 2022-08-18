import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { PressReleases, SocialMedia, TrendingTabs } from "../screens";
import { ThemeContext } from "../utils/contexts";

const Tab = createMaterialTopTabNavigator();

function TopTabsNavigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      style={{ marginStart: 24 }}
      initialRouteName="Press Releases"
    >
      <Tab.Screen
        name="Press Releases"
        component={PressReleases}
        options={{
          tabBarLabel: "Press Releases",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarLabelStyle: {
            width: "100%",
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Trending"
        component={TrendingTabs}
        options={{
          tabBarLabel: "Trending",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarLabelStyle: {
            width: "100%",
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
        }}
      />
      <Tab.Screen
        name="SocialMedia"
        component={SocialMedia}
        options={{
          tabBarLabel: "Social Media",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarLabelStyle: {
            width: "100%",
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabsNavigation;
