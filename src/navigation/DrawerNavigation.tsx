import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  About,
  Events,
  FactChecker,
  Home,
  MyAccount,
  PMVideo,
  Settings,
} from "../screens";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC<{ navigation: any; rest: any }> = ({
  navigation,
  ...rest
}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: { width: "100%" },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="My Account" component={MyAccount} options={{}} />
      <Drawer.Screen name="About PIB" component={About} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="PMVideos" component={PMVideo} />
      <Drawer.Screen name="Fact Checker" component={FactChecker} />
      <Drawer.Screen name="Share this App" component={FactChecker} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Log Out" component={Settings} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
