import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  PressReleases,
  SavedReleases,
  SocialMedia,
  TrendingTabs,
} from "../screens";
import { ThemeContext } from "../utils/contexts";
import { regionalThemes } from "../utils/theme";

const Tab = createMaterialTopTabNavigator();

function SavedTopTabsNavigation() {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      style={{ marginStart: 0 }}
      initialRouteName="Releases"
      screenOptions={{
        tabBarScrollEnabled: true,

        tabBarStyle: { backgroundColor: theme.colors.background, elevation: 0 },
        tabBarItemStyle: { padding: 0 },
        tabBarIndicatorStyle: {
          backgroundColor: regionalThemes[currentRegion].color,
        },
      }}
    >
      <Tab.Screen
        name="Releases"
        component={SavedReleases}
        options={{
          tabBarLabel: "Releases",
          tabBarInactiveTintColor: theme.colors.g1,
          tabBarLabelStyle: {
            textTransform: "none",
            fontFamily: theme.fonts.subTitle.fontFamily,
            fontSize: theme.fonts.body.fontSize,
          },
          tabBarActiveTintColor: regionalThemes[currentRegion].color,
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
          tabBarActiveTintColor: regionalThemes[currentRegion].color,
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
          tabBarActiveTintColor: regionalThemes[currentRegion].color,
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
          tabBarActiveTintColor: regionalThemes[currentRegion].color,
        }}
      />
    </Tab.Navigator>
  );
}

export default SavedTopTabsNavigation;
