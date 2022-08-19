import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import MainLayout from "../layouts/MainLayout";
import { FlatList } from "react-native-gesture-handler";

import {
  AccountIcon,
  CheckerIcon,
  CloseIcon,
  EventIcon,
  LogOutIcon,
  PIBIcon,
  RightArrowIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  VideoIcon,
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
    icon: PIBIcon,
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
    icon: VideoIcon,
    name: "PMVideos",
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
    icon: ShareIcon,
    name: "Share this App",
    goto: RightArrowIcon,
  },
  {
    id: "7",
    icon: SettingsIcon,
    name: "Settings",
    goto: RightArrowIcon,
  },
  {
    id: "8",
    icon: LogOutIcon,
    name: "Log Out",
    goto: "",
  },
];

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: { marginTop: 24 },
    iconContainer: {
      marginStart: "auto",
      marginEnd: 18,
      marginBottom: 16,
    },
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

const CustomDrawerContent: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedID, setSelectedID] = useState<string>("");
  return (
    <MainLayout
      customStyles={getStyles(theme).container}
      disableDefaultPadding={true}
    >
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={getStyles(theme).iconContainer}>
              <CloseIcon
                color="black"
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
                  selectedID === item.id ? theme.colors.primary : "#989898"
                }
                customStyle={{}}
              />
            }
            optionName={item.name}
            icon={
              item.id !== "8" && (
                <item.goto
                  color={
                    selectedID === item.id ? theme.colors.primary : "#989898"
                  }
                  customStyle={getStyles(theme).nextPage}
                />
              )
            }
            myStyle={{
              color: selectedID === item.id ? theme.colors.primary : "#989898",
            }}
            customOnPress={() => {
              setSelectedID(item.id);
              navigation.navigate(`${item.name}`);
            }}
          />
        )}
      />
    </MainLayout>
  );
};

export default CustomDrawerContent;
