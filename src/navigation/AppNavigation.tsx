import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../utils/contexts/ThemeContext";

import HomeScreen from "../screens/HomeScreen";
import HomeIcon from "../assets/icons/HomeIcon";
import TrendingScreen from "../screens/TrendingScreen";
import LiveScreen from "../screens/LiveScreen";
import PhotosScreen from "../screens/PhotosScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import TrendingIcon from "../assets/icons/TrendingIcon";
import LiveIcon from "../assets/icons/LiveIcon";
import PhotosIcon from "../assets/icons/PhotosIcon";
import NotificationsIcon from "../assets/icons/NotificationsIcon";

const App = createBottomTabNavigator();

function AppNavigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <App.Navigator>
      <App.Screen
        name="Home"
        component={HomeScreen}
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
        component={TrendingScreen}
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
        component={LiveScreen}
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
        component={PhotosScreen}
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
        component={NotificationsScreen}
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
