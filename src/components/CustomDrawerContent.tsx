import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import MainLayout from "../layouts/MainLayout";
import { FlatList } from "react-native-gesture-handler";
import { useNavigationState } from "@react-navigation/native";

import {
  AccountIcon,
  CheckerIcon,
  CloseIcon,
  EventIcon,
  InfoIcon,
  LogOutIcon,
  PMVideoIcon,
  RightArrowIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  Videos2Icon,
} from "../assets/icons";
import DrawerOptions from "./DrawerOptions";

const data = [
  {
    id: "1",
    icon: AccountIcon,
    name: "My Account",
    goto: RightArrowIcon,
  },
  {
    id: "2",
    icon: InfoIcon,
    name: "About PIB",
    goto: RightArrowIcon,
  },
  {
    id: "3",
    icon: EventIcon,
    name: "Events",
    goto: RightArrowIcon,
  },
  {
    id: "4",
    icon: PMVideoIcon,
    name: "PM Videos",
    goto: RightArrowIcon,
  },
  {
    id: "5",
    icon: CheckerIcon,
    name: "Fact Checker",
    goto: SendIcon,
  },
  {
    id: "6",
    icon: Videos2Icon,
    name: "Videos",
    goto: RightArrowIcon,
  },

  {
    id: "7",
    icon: ShareIcon,
    name: "Share this App",
    goto: RightArrowIcon,
  },
  {
    id: "8",
    icon: SettingsIcon,
    name: "Settings",
    goto: RightArrowIcon,
  },
  {
    id: "9",
    icon: LogOutIcon,
    name: "Log Out",
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
  navigation: any;
  state: any;
}> = ({ navigation, state }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedID, setSelectedID] = useState<string>("");
  const [leftFocus, setLeftFocus] = useState<boolean>(false);
  const index = useNavigationState((state) => state.index);

  useEffect(() => {
    if (!state.index) setSelectedID("");
    if (index !== 0) {
      setLeftFocus(true);
    } else {
      setLeftFocus(false);
    }
    if (leftFocus && index === 0) {
      setSelectedID("");
      navigation.navigate("Home");
    }
  }, [state, index, leftFocus]);
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
              <CloseIcon
                color={theme.colors.primary}
                customOnPress={() => navigation.closeDrawer()}
              />
            </View>
            <View style={getStyles(theme).seperatorContainer}>
              <View style={getStyles(theme).itemSeperator} />
            </View>
          </View>
        }
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <DrawerOptions
            children={
              <item.icon
                color={
                  selectedID === item.id
                    ? theme.colors.primary
                    : theme.colors.g1
                }
                customStyle={{}}
              />
            }
            optionName={item.name}
            icon={
              item.id !== "9" && (
                <item.goto
                  color={
                    selectedID === item.id
                      ? theme.colors.primary
                      : theme.colors.g1
                  }
                  customStyle={getStyles(theme).nextPage}
                />
              )
            }
            myStyle={{
              color:
                selectedID === item.id ? theme.colors.primary : theme.colors.g1,
            }}
            customOnPress={() => {
              setSelectedID(item.id);
              navigation.navigate(`${item.name}`), { name: item.name };
            }}
          />
        )}
      />
    </MainLayout>
  );
};

export default CustomDrawerContent;