import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Share } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { LocaleContext, ThemeContext } from "../utils/contexts";
import MainLayout from "../layouts/MainLayout";
import { FlatList } from "react-native-gesture-handler";
import { useNavigationState } from "@react-navigation/native";

import {
  AccountIcon,
  BlueThemeIcon,
  CheckerIcon,
  CloseIcon,
  EventIcon,
  GreenThemeIcon,
  InfoIcon,
  LavenderThemeIcon,
  LogOutIcon,
  MediaInvitaionsIcon,
  OrangeThemeIcon,
  PinkThemeIcon,
  PMVideoIcon,
  ReddishBrownThemeIcon,
  ReddishOrangeThemeIcon,
  RightArrowIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  Videos2Icon,
  YellowThemeIcon,
} from "../assets/icons";
import DrawerOptions from "./DrawerOptions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CURRENT_USER } from "../utils/constants";
//ADARSH
import { SelectedContext } from "../utils/contexts/drawerContext";
import { MyAccount } from "../screens";
import { StackNavigatorContext } from "../navigation/stackNaviagtionContext";

const data = [
  {
    id: "1",
    icon: AccountIcon,
    name: "My Account",
    label: "drawer.myAccount",
    goto: RightArrowIcon,
  },
  {
    id: "2",
    icon: InfoIcon,
    name: "About PIB",
    label: "drawer.aboutPIB",
    goto: RightArrowIcon,
  },
  {
    id: "5",
    icon: CheckerIcon,
    name: "Fact Checker",
    label: "drawer.factChacker",
    goto: SendIcon,
  },
  {
    id: "8",
    icon: ShareIcon,
    name: "Share this App",
    label: "drawer.shareApp",
    goto: RightArrowIcon,
  },
  {
    id: "9",
    icon: SettingsIcon,
    name: "Settings",
    label: "drawer.settings",
    goto: RightArrowIcon,
  },
  {
    id: "10",
    icon: LogOutIcon,
    name: "Log Out",
    label: "drawer.logOut",
    goto: "",
  },
];

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: { flex: 1 },
    headerContainer: { marginTop: 24 },
    iconContainer: {
      marginStart: "auto",
      marginEnd: 18,
      marginBottom: 16,
    },
    innerContainer: { backgroundColor: theme.colors.background },
    itemSeperator: {
      height: 1,
      width: "100%",
      backgroundColor: "#E5E5E5",
    },
    nextPage: {
      position: "absolute",
      right: 0,
    },
    seperatorContainer: {
      paddingHorizontal: 40,
    },
  });
}

const CustomDrawerContent: React.FC<{
  onPress: any;
}> = ({ onPress }) => {
  const { navigation } = useContext(StackNavigatorContext);
  const { setSelectedId } = useContext(SelectedContext);
  const { theme, currentRegion } = useContext(ThemeContext);
  const [selectedID, setSelectedID] = useState<string>("");
  const [leftFocus, setLeftFocus] = useState<boolean>(false);
  const [drawerList, setDrawerList] = useState(data);
  //const index = useNavigationState((state) => state.index);

  const { initializeAppLanguage, translations, appLanguage } =
    useContext(LocaleContext);
  async function handleShare() {
    try {
      const result = await Share.share({
        message: "https://google.com",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
  async function handleLogout() {
    await AsyncStorage.removeItem(CURRENT_USER);
    await AsyncStorage.removeItem("fcmToken");
    navigation.navigate(
      "LoginScreen",
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      })
    );
    navigation.closeDrawer();
  }
  // useEffect(() => {
  //   if (!state.index) setSelectedID("");
  //   if (index !== 0) {
  //     setLeftFocus(true);
  //   } else {
  //     setLeftFocus(false);
  //   }
  //   if (leftFocus && index === 0) {
  //     setSelectedID("");
  //     navigation.navigate("Home");
  //   }
  // }, [state, index, leftFocus]);

  useEffect(() => {
    if (appLanguage && translations) {
      initializeAppLanguage();
    }
  }, [appLanguage, translations]);
  return (
    <MainLayout
      customStyles={getStyles(theme).container}
      disableDefaultPadding={true}
    >
      <FlatList
        contentContainerStyle={{ paddingBottom: 24 }}
        style={getStyles(theme).innerContainer}
        ListHeaderComponent={
          <View style={getStyles(theme).headerContainer}>
            <View style={getStyles(theme).iconContainer}>
              <CloseIcon color={theme.colors.primary} customOnPress={onPress} />
            </View>
            <View style={getStyles(theme).seperatorContainer}>
              <View style={getStyles(theme).itemSeperator} />
            </View>
          </View>
        }
        data={drawerList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <DrawerOptions
            children={
              <item.icon
                color={
                  selectedID === item.id ? theme.colors.g1 : theme.colors.g1
                }
                customStyle={{}}
              />
            }
            optionName={translations[item.label] || item.name}
            icon={
              item.id !== "10" && (
                <item.goto
                  color={
                    selectedID === item.id ? theme.colors.g1 : theme.colors.g1
                  }
                  customStyle={getStyles(theme).nextPage}
                />
              )
            }
            myStyle={{
              color: selectedID === item.id ? theme.colors.g1 : theme.colors.g1,
            }}
            customOnPress={() => {
              setSelectedId(false);
              if (item.name === "Share this App") return handleShare();
              setSelectedID(item.id);
              if (item.name === "Log Out") return handleLogout();
              navigation.navigate(`${item.name}`), { name: item.name };
            }}
          />
        )}
      />
    </MainLayout>
  );
};

export default CustomDrawerContent;
