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
import { regionalThemes } from "../utils/theme";
const App = createBottomTabNavigator();

const AppNavigation: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <StackNavigatorContext.Provider value={{ navigation }}>
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
                  color={
                    focused
                      ? regionalThemes[currentRegion].color
                      : theme.colors.white
                  }
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
                  color={
                    focused
                      ? regionalThemes[currentRegion].color
                      : theme.colors.white
                  }
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
                  color={
                    focused
                      ? regionalThemes[currentRegion].color
                      : theme.colors.g1
                  }
                  fillColor={
                    focused
                      ? regionalThemes[currentRegion].color
                      : theme.colors.white
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
                  color={
                    focused
                      ? regionalThemes[currentRegion].color
                      : theme.colors.white
                  }
                  colorFill={
                    focused
                      ? regionalThemes[currentRegion].color
                      : theme.colors.white
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
                  color={
                    focused
                      ? regionalThemes[currentRegion].color
                      : theme.colors.white
                  }
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
