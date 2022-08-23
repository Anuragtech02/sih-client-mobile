import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { LocaleContext, ThemeContext } from "../utils/contexts";
import BackArrow from "../assets/icons/BackArrow";
import { CloseIcon, DrawerIcon } from "../assets/icons";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APP_LANGUAGE } from "../utils/constants";

const fontSizes = [
  { label: "Small", value: "1" },
  { label: "Normal", value: "2" },
  { label: "Large", value: "3" },
  { label: "ExtraLarge", value: "4" },
];
const langugages = [
  { label: "Hindi", value: "hi" },
  { label: "English", value: "en" },
  { label: "Bengail", value: "be" },
  { label: "Marathi", value: "mr" },
  { label: "Telgu", value: "tl" },
  { label: "Tamil", value: "tm" },
  { label: "Malayalam", value: "ml" },
  { label: "Kannada", value: "kn" },
  { label: "Gujarati", value: "gu" },
];
const regions = [
  { label: "Small", value: "1" },
  { label: "Normal", value: "2" },
  { label: "Large", value: "3" },
  { label: "ExtraLarge", value: "4" },
];
const ministries = [
  { label: "Small", value: "1" },
  { label: "Normal", value: "2" },
  { label: "Large", value: "3" },
  { label: "ExtraLarge", value: "4" },
];

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      backgroundColor: theme.colors.background,
    },
    closeIcon: {
      marginStart: "auto",
      marginEnd: 12,
      marginBottom: 24,
    },
    dropdown: {
      height: 50,
      backgroundColor: theme.colors.background,
      borderRadius: 4,
      padding: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      color: theme.colors.primary,
      elevation: 2,
      marginBottom: 24,
    },
    dropDownContainer: {
      marginTop: 24,
    },
    dropdownItemContainer: {
      backgroundColor: theme.colors.background,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
    iconContainer: {
      alignItems: "center",
      flexDirection: "row",
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      backgroundColor: theme.colors.background,
    },
    placeholderStyle: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
    },
    selectedTextStyle: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.primary,
    },
    selectSize: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
      marginBottom: 8,
    },
    item: {
      padding: 17,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textItem: {
      flex: 1,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
    },
  });
}

const Settings: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [fontSize, setFontSize] = useState("1");
  const [region, setRegion] = useState("1");
  const [ministry, setMinistry] = useState("1");

  const { setLocaleLanguage, appLanguage } = useContext(LocaleContext);

  function handleChangeLanguage(lang: any) {
    setLocaleLanguage(lang.value);
  }

  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <View style={getStyle(theme).iconContainer}>
        <Text style={getStyle(theme).heading}>SETTINGS</Text>
        <CloseIcon
          color={theme.colors.primary}
          customOnPress={() => navigation.navigate("Home")}
          customStyle={getStyle(theme).closeIcon}
        />
      </View>
      <View style={getStyle(theme).dropDownContainer}>
        <Text style={getStyle(theme).selectSize}>Select font size</Text>
        <DropdownComponent
          value={fontSize}
          myData={fontSizes}
          onChange={(value: string) => setFontSize(value)}
        />
        <Text style={getStyle(theme).selectSize}>Change Language</Text>
        <DropdownComponent
          value={appLanguage}
          myData={langugages}
          onChange={(value: string) => handleChangeLanguage(value)}
        />
        <Text style={getStyle(theme).selectSize}>Change Region</Text>
        <DropdownComponent
          value={region}
          myData={regions}
          onChange={(value: string) => setRegion(value)}
        />
        <Text style={getStyle(theme).selectSize}>Change Ministry</Text>
        <DropdownComponent
          value={ministry}
          myData={ministries}
          onChange={(value: string) => setMinistry(value)}
        />
      </View>
    </MainLayout>
  );
};

const DropdownComponent: React.FC<{
  myData?: any;
  value: string;
  onChange: (value: any) => void;
}> = ({ myData, value, onChange }) => {
  const renderItem = (item: any) => {
    return (
      <View style={getStyle(theme).item}>
        <Text style={getStyle(theme).textItem}>{item.label}</Text>
      </View>
    );
  };
  const { theme } = useContext(ThemeContext);
  return (
    <Dropdown
      style={getStyle(theme).dropdown}
      placeholderStyle={getStyle(theme).placeholderStyle}
      selectedTextStyle={getStyle(theme).selectedTextStyle}
      inputSearchStyle={getStyle(theme).inputSearchStyle}
      iconStyle={getStyle(theme).iconStyle}
      data={myData}
      containerStyle={getStyle(theme).dropdownItemContainer}
      iconColor={theme.colors.g1}
      showsVerticalScrollIndicator={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={onChange}
      renderItem={renderItem}
    />
  );
};

export default Settings;
