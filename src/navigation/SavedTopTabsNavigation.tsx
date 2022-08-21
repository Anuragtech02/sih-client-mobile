import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { PressReleases, SocialMedia, TrendingTabs } from "../screens";
import { ThemeContext } from "../utils/contexts";

const Tab = createMaterialTopTabNavigator();

function SavedTopTabsNavigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      style={{ marginStart: 0 }}
      initialRouteName="Releases"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarItemStyle: { padding: 0 },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Releases"
        component={PressReleases}
        options={{
          tabBarLabel: "Releases",
          tabBarInactiveTintColor: theme.colors.g1,
          tabBarLabelStyle: {
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="Photos"
        component={TrendingTabs}
        options={{
          tabBarLabel: "Photos",
          tabBarInactiveTintColor: theme.colors.g1,
          tabBarLabelStyle: {
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="Events"
        component={SocialMedia}
        options={{
          tabBarLabel: "Events",
          tabBarInactiveTintColor: theme.colors.g1,
          tabBarLabelStyle: {
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="Media Invitation"
        component={SocialMedia}
        options={{
          tabBarLabel: "Media Invitation",
          tabBarInactiveTintColor: theme.colors.g1,
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

export default SavedTopTabsNavigation;
