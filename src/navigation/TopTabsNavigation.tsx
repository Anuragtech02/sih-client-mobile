import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  MediaInvitations,
  Photos,
  PMVideo,
  PressReleases,
  SocialMedia,
  TrendingTabs,
} from "../screens";
import { ThemeContext } from "../utils/contexts";

const Tab = createMaterialTopTabNavigator();

function TopTabsNavigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Press Releases"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: theme.colors.background,
          marginStart: 24,
        },
        tabBarItemStyle: {
          padding: 0,
          alignSelf: "center",
        },
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
        name="PMVideos"
        component={PMVideo}
        options={{
          tabBarLabel: "PMVideos",
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
        name="Media Invitations"
        component={MediaInvitations}
        options={{
          tabBarLabel: "Media Invitations",
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
        name="SocialMedia"
        component={SocialMedia}
        options={{
          tabBarLabel: "Social Media",
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
        name="Videos"
        component={SocialMedia}
        options={{
          tabBarLabel: "Videos",
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

export default TopTabsNavigation;
