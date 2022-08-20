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
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarItemStyle: { padding: 0 },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Press Releases"
        component={PressReleases}
        options={{
          tabBarLabel: "Press Releases",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarLabelStyle: {
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="Trending"
        component={TrendingTabs}
        options={{
          tabBarLabel: "Articles",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarLabelStyle: {
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="SocialMedia"
        component={SocialMedia}
        options={{
          tabBarLabel: "Social Media",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarLabelStyle: {
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabsNavigation;
