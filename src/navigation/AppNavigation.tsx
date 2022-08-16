import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../utils/contexts";

import { Home, Live, Notifications, Photos, Trending } from "../screens";
import {
  HomeIcon,
  TrendingIcon,
  LiveIcon,
  PhotosIcon,
  NotificationsIcon,
} from "../assets/icons";
const App = createBottomTabNavigator();

function AppNavigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <App.Navigator>
      <App.Screen
        name="Home"
        component={Home}
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
              <LiveIcon
                color={focused ? theme.colors.primary : "white"}
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
