import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../utils/contexts";

import { Home, Live, Notifications, Photos, Trending } from "../screens";
import {
  HomeIcon,
  TrendingIcon,
  PhotosIcon,
  NotificationsIcon,
  VideoIcon,
} from "../assets/icons";
import DrawerNavigation from "./DrawerNavigation";
const App = createBottomTabNavigator();

function AppNavigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <App.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <App.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIcon
                color={focused ? theme.colors.primary : "white"}
                opacity={focused ? 1 : 0}
              />
            );
          },
        }}
      />
      <App.Screen
        name="Trending"
        component={Trending}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TrendingIcon
                color={focused ? theme.colors.primary : "white"}
                opacity={focused ? 1 : 0}
              />
            );
          },
        }}
      />
      <App.Screen
        name="Live"
        component={Live}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }: { focused: any }) => {
            return (
              <VideoIcon
                color={focused ? theme.colors.primary : "#989898"}
                fillColor={focused ? theme.colors.primary : "white"}
                newColor={focused ? "red" : "#989898"}
                opacity={focused ? 1 : 0}
              />
            );
          },
        }}
      />
      <App.Screen
        name="Photos"
        component={Photos}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <PhotosIcon
                color={focused ? theme.colors.primary : "white"}
                colorFill={focused ? theme.colors.primary : "white"}
                opacity={focused ? 1 : 0}
              />
            );
          },
        }}
      />
      <App.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <NotificationsIcon
                color={focused ? theme.colors.primary : "white"}
                opacity={focused ? 1 : 0}
              />
            );
          },
        }}
      />
    </App.Navigator>
  );
}
export default AppNavigation;
