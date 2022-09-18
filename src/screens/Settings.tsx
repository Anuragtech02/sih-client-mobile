import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { LocaleContext, ThemeContext } from "../utils/contexts";
import BackArrow from "../assets/icons/BackArrowIcon";
import {
  BlueThemeIcon,
  CloseIcon,
  DrawerIcon,
  GreenThemeIcon,
  LavenderThemeIcon,
  OrangeThemeIcon,
  PinkThemeIcon,
  ReddishBrownThemeIcon,
  ReddishOrangeThemeIcon,
  YellowThemeIcon,
} from "../assets/icons";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APP_LANGUAGE } from "../utils/constants";
import { regionalThemes } from "../utils/theme";
import { DropDownMultiSelect, DropDownSingleSelect } from "../components";
import { ScrollView } from "react-native-gesture-handler";

const fontSizes = [
  { name: "Small", id: "1" },
  { name: "Normal", id: "2" },
  { name: "Large", id: "3" },
  { name: "ExtraLarge", id: "4" },
];
const langugages = [
  { name: "Hindi", id: "hi" },
  { name: "English", id: "en" },
  { name: "Bengail", id: "be" },
  { name: "Marathi", id: "mr" },
  { name: "Telgu", id: "te" },
  { name: "Tamil", id: "ta" },
  { name: "Malayalam", id: "ml" },
  { name: "Kannada", id: "kn" },
  { name: "Gujarati", id: "gu" },
];

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: theme.colors.background,
    },
    closeIcon: {
      marginStart: "auto",
      marginEnd: 12,
      marginBottom: 24,
    },
    dropDownContainer: {
      marginTop: 24,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
    iconContainer: {
      alignItems: "center",
      flexDirection: "row",
    },
    selectSize: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
      marginVertical: 10,
    },
  });
}

const Settings: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [fontSize, setFontSize] = useState("1");
  const [region, setRegion] = useState("1");
  const [ministry, setMinistry] = useState("1");
  const { currentRegion, setCurrentRegion } = useContext(ThemeContext);
  const { setLocaleLanguage, appLanguage } = useContext(LocaleContext);
  const [themes, setThemes] = useState<any>([]);

  useEffect(() => {
    setThemes(
      Object.keys(regionalThemes).map((item: any, i: number) => ({
        id: i,
        color: item,
      }))
    );
  }, [regionalThemes]);

  function handleChangeLanguage(lang: any) {
    setLocaleLanguage(lang);
  }
  const currentFont = fontSizes.find((pre) => pre.id === fontSize)?.name;
  const currentLanguage = langugages.find(
    (pre) => pre.id === appLanguage
  )?.name;
  return (
    <MainLayout customStyles={getStyle(theme).container}>
      {currentRegion === "blue" && (
        <BlueThemeIcon
          customStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "green" && (
        <GreenThemeIcon
          customStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "pink" && (
        <PinkThemeIcon
          customStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "yellow" && (
        <YellowThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.6,
          }}
        />
      )}
      {currentRegion === "lavender" && (
        <LavenderThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.3,
          }}
        />
      )}
      {currentRegion === "reddishOrange" && (
        <ReddishOrangeThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.3,
          }}
        />
      )}
      {currentRegion === "reddishBrown" && (
        <ReddishBrownThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      {currentRegion === "orange" && (
        <OrangeThemeIcon
          customStyle={{
            position: "absolute",
            top: -10,
            right: 0,
            opacity: 0.1,
          }}
        />
      )}
      <View style={getStyle(theme).iconContainer}>
        <Text style={getStyle(theme).heading}>SETTINGS</Text>
        <CloseIcon
          color={theme.colors.primary}
          customOnPress={() =>
            navigation.navigate(
              "AppNavigation",
              navigation.reset({
                index: 0,
                routes: [{ name: "AppNavigation" }],
              })
            )
          }
          customStyle={getStyle(theme).closeIcon}
        />
      </View>

      <View style={getStyle(theme).dropDownContainer}>
        <Text style={getStyle(theme).selectSize}>Select font size</Text>

        <View style={{ zIndex: 2 }}>
          <DropDownSingleSelect
            myList={fontSizes}
            current={currentFont}
            onChange={(value: string) => setFontSize(value)}
          />
        </View>
        <Text style={getStyle(theme).selectSize}>Change Language</Text>

        <View style={{ zIndex: 1 }}>
          <DropDownSingleSelect
            myList={langugages}
            current={currentLanguage}
            onChange={(value: string) => handleChangeLanguage(value)}
          />
        </View>

        <Text style={getStyle(theme).selectSize}>Change Theme</Text>
      </View>

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
          data={themes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ThemeCard
              onPress={() => setCurrentRegion(item.color)}
              themeName={item.color}
            />
          )}
        />
      </View>
    </MainLayout>
  );
};

const ThemeCard: React.FC<{ themeName: string; onPress: any }> = ({
  themeName,
  onPress,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12 }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 30,
            height: 60,
            backgroundColor: themeName
              ? regionalThemes[themeName].color
              : "red",
          }}
        />
        <View>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: theme.colors.g1,
            }}
          />
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: theme.colors.g4,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Settings;
