import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../utils/contexts";

import { Home, Live, Notifications, Photos, Saved } from "../screens";
import {
  HomeIcon,
  NotificationsIcon,
  VideoIcon,
  SavedIcon,
  PhotosIcon,
} from "../assets/icons";
import DrawerNavigation from "./DrawerNavigation";
import StackNavigatorContext from "./stackNaviagtionContext";
const App = createBottomTabNavigator();

const AppNavigation: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <StackNavigatorContext.Provider value={{ value: navigation }}>
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
                  color={focused ? theme.colors.primary : theme.colors.white}
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
                  color={focused ? theme.colors.primary : theme.colors.white}
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
                  color={focused ? theme.colors.primary : theme.colors.g1}
                  fillColor={
                    focused ? theme.colors.primary : theme.colors.white
                  }
                  newColor={focused ? "red" : theme.colors.g1}
                  opacity={focused ? 1 : 0}
                />
              );
            },
          }}
        />
        <App.Screen
          name="Saved"
          component={Saved}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <SavedIcon
                  color={focused ? theme.colors.primary : theme.colors.white}
                  colorFill={
                    focused ? theme.colors.primary : theme.colors.white
                  }
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
                  color={focused ? theme.colors.primary : theme.colors.white}
                  opacity={focused ? 1 : 0}
                />
              );
            },
          }}
        />
      </App.Navigator>
    </StackNavigatorContext.Provider>
  );
};
export default AppNavigation;
