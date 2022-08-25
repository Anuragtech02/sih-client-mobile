import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { LocaleContext, ThemeContext } from "../utils/contexts";
import BackArrow from "../assets/icons/BackArrowIcon";
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
  { label: "Telgu", value: "te" },
  { label: "Tamil", value: "ta" },
  { label: "Malayalam", value: "ml" },
  { label: "Kannada", value: "kn" },
  { label: "Gujarati", value: "gu" },
];
const regions = [
  { label: "PIB Mumbai", value: "1" },
  { label: "PIB Delhi", value: "2" },
  { label: "PIB Hyderabad", value: "3" },
  { label: "PIB Chennai", value: "4" },
  { label: "PIB Chandigarh", value: "5" },
  { label: "PIB Kolkata", value: "6" },
  { label: "PIB Bengaluru", value: "7" },
  { label: "PIB Bhubaneshwar", value: "8" },
  { label: "PIB Ahmedabad", value: "9" },
  { label: "PIB Guwahati", value: "10" },
  { label: "PIB Thiruvananthpuram", value: "11" },
  { label: "PIB Imphal", value: "12" },
];
const ministries = [
  { label: "President's Secretariat", value: "1" },
  { label: "Vice President's Secretariat", value: "2" },
  { label: "Prime Minister's Office", value: "3" },
  { label: "Cabinet", value: "4" },
  { label: "Cabinet Committee Decisions", value: "5" },
  { label: "Cabinet Committee on Economic Affairs(CCEA)", value: "6" },
  { label: "Cabinet Secretariat", value: "7" },
  { label: "Cabinet Committee on Infrastructure", value: "8" },
  { label: "Cabinet Committee on Price", value: "9" },
  { label: "Cabinet Committee on Investment", value: "10" },
  { label: "AYUSH", value: "11" },
  { label: "Other Cabinet Committees", value: "12" },
  { label: "Department of Space", value: "13" },
  { label: "Department of Ocean Development", value: "14" },
  { label: "Department of Atomic Energy", value: "15" },
  { label: "Election Commission", value: "16" },
  { label: "Finance Commission", value: "17" },
  { label: "Ministry of Agriculture & Farmers Welfare", value: "18" },
  { label: "Ministry of Agro & Rural Industries", value: "19" },
  { label: "Ministry of Chemicals and Fertilizers", value: "20" },
  { label: "Ministry of Civil Aviation", value: "21" },
  { label: "Ministry of Coal", value: "22" },
  { label: "Ministry of Commerce & Industry", value: "23" },
  { label: "Ministry of Communications", value: "24" },
  { label: "Ministry of Company Affairs", value: "25" },
  {
    label: "Ministry of Consumer Affairs, Food & Public Distribution",
    value: "26",
  },
  { label: "Ministry of Corporation", value: "27" },
  { label: "Ministry of Corporate Affairs", value: "28" },
  { label: "Ministry of Culture", value: "29" },
  { label: "Ministry of Defence", value: "30" },
  { label: "Ministry of Development of North-East Region", value: "31" },
  { label: "Ministry of Disinvestment", value: "32" },
  { label: "Ministry of Drinking Water & Sanitation", value: "33" },
  { label: "Ministry of Earth Science", value: "34" },
  { label: "Ministry of Education", value: "35" },
  { label: "Ministry of Electronics & IT", value: "36" },
  { label: "Ministry of Environment, Forest and Climate Change", value: "37" },
  { label: "Ministry of External Affairs", value: "38" },
  { label: "Ministry of Finance", value: "39" },
  { label: "Ministry of Fisheries, Animal Husbandry & Dairying", value: "40" },
  { label: "Ministry of Food Processing Industries", value: "41" },
  { label: "Ministry of Health and Family Welfare", value: "42" },
  { label: "Ministry of Heavy Industries", value: "43" },
  { label: "Ministry of Home Affairs", value: "44" },
  { label: "Ministry of Housing & Urban Affairs", value: "45" },
  { label: "Ministry of Information & Broadcasting", value: "46" },
  { label: "Ministry of Jal Shakti", value: "47" },
  { label: "Ministry of Labour & Employment", value: "48" },
  { label: "Ministry of Law and Justice", value: "49" },
  { label: "Ministry of Micro, Small & Medium Enterprises", value: "50" },
  { label: "Ministry of Mines", value: "51" },
  { label: "Ministry of Minority Affairs", value: "52" },
  { label: "Ministry of New and Renewable Energy", value: "53" },
  { label: "Ministry of Overseas India Affairs", value: "54" },
  { label: "Ministry of Panchayati Raj", value: "52" },
  { label: "Ministry of Parliamentary Affairs", value: "56" },
  { label: "Ministry of Personal, Public Grievances & Pensions", value: "57" },
  { label: "Ministry of Petroleum & Natural Gas", value: "58" },
  { label: "Ministry of Planning", value: "59" },
  { label: "Ministry of Power", value: "60" },
  { label: "Ministry of Railways", value: "61" },
  { label: "Ministry of Road Transport & Highways", value: "62" },
  { label: "Ministry of Rural Development", value: "63" },
  { label: "Ministry of Science & Technology", value: "64" },
  { label: "Ministry of Ports, Shipping and Waterways", value: "65" },
  { label: "Ministry of Skill Development and Entrepreneurship", value: "66" },
  { label: "Ministry of Social Justice & Empowerment", value: "67" },
  { label: "Ministry of Statistics & Programme Implementation", value: "68" },
  { label: "Ministry of Steel", value: "69" },
  { label: "Ministry of Surface Transport", value: "70" },
  { label: "Ministry of Textiles", value: "71" },
  { label: "Ministry of Tourism", value: "72" },
  { label: "Ministry of Tribal Affairs", value: "73" },
  { label: "Ministry of Urban Development", value: "74" },
  {
    label:
      "Ministry of Water Resources, River Development and Ganga Rejuvenation",
    value: "75",
  },
  { label: "Ministry of Women and Child Development", value: "76" },
  { label: "Ministry of Youth Affairs and Sports", value: "77" },
  { label: "NITI Aayog", value: "78" },
  { label: "Planning Commission", value: "79" },
  { label: "PM Speech", value: "80" },
  { label: "EAC-PM", value: "81" },
  { label: "UPSC", value: "82" },
  { label: "Special Services and Features", value: "83" },
  { label: "PIB Headquarters", value: "84" },
  { label: "Office of Principal Scientific Advisor to Gol", value: "85" },
  { label: "National Financial Reporting Authority", value: "86" },
  { label: "Competition Commission of India", value: "87" },
  { label: "IFSC Authority", value: "88" },
  { label: "National Security Council Secretariat", value: "89" },
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
