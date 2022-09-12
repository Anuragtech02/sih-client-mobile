import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { AuthContext, ThemeContext } from "../utils/contexts";
import MainLayout from "../layouts/MainLayout";
import { BackArrowIcon, RadioButtonIcon } from "../assets/icons";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { Button } from "../components";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const female = [
  require("../assets/avatars/Female/Assamee.png"),
  require("../assets/avatars/Female/Christian.png"),
  require("../assets/avatars/Female/Group2.png"),
  require("../assets/avatars/Female/Group5.png"),
  require("../assets/avatars/Female/Group6.png"),
  require("../assets/avatars/Female/Group9.png"),
  require("../assets/avatars/Female/Group10.png"),
  require("../assets/avatars/Female/Gujarati.png"),
  require("../assets/avatars/Female/Hindu.png"),
  require("../assets/avatars/Female/Kashmiri.png"),
  require("../assets/avatars/Female/Manipuri.png"),
  require("../assets/avatars/Female/Parsi.png"),
  require("../assets/avatars/Female/Punjabi.png"),
  require("../assets/avatars/Female/Rajasthani.png"),
];
const male = [
  require("../assets/avatars/Male/Bengali.png"),
  require("../assets/avatars/Male/Buddhist-monk.png"),
  require("../assets/avatars/Male/Christian.png"),
  require("../assets/avatars/Male/Group11.png"),
  require("../assets/avatars/Male/Group12.png"),
  require("../assets/avatars/Male/Group14.png"),
  require("../assets/avatars/Male/Group15.png"),
  require("../assets/avatars/Male/Group16.png"),
  require("../assets/avatars/Male/Gujarati.png"),
  require("../assets/avatars/Male/Jain.png"),
  require("../assets/avatars/Male/Marathi.png"),
  require("../assets/avatars/Male/Muslim.png"),
  require("../assets/avatars/Male/Pandit.png"),
  require("../assets/avatars/Male/Parsi.png"),
  require("../assets/avatars/Male/Punjabi.png"),
  require("../assets/avatars/Male/South_Indian.png"),
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

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    buttonContainer: {
      marginTop: 48,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
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

      marginTop: 8,
    },
    dropDownContainer: {
      marginTop: 24,
    },
    dropdownItemContainer: {
      backgroundColor: theme.colors.background,
    },
    firstItem: {
      flexDirection: "row",
      alignItems: "center",
    },
    heading: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
      marginTop: 16,
    },
    innerContainer: {
      marginTop: 20,
      paddingBottom: 24,
    },
    items: {
      marginStart: 24,
      flexDirection: "row",
      alignItems: "center",
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      backgroundColor: theme.colors.background,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    image: {
      width: 80,
      height: 80,
    },
    multiSelectDropdown: {
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
      marginTop: 8,
    },
    multiSelectPlaceholder: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
    },
    multiSelectedText: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.primary,
    },
    multiSelectInputSearch: {
      height: 40,
      fontSize: 16,
      backgroundColor: theme.colors.background,
    },
    multiSelectIconStyle: {
      width: 20,
      height: 20,
    },
    multiSelectSelectedStyle: {
      borderRadius: 12,
    },
    multiSelectDropdownItemContainer: {
      backgroundColor: theme.colors.background,
    },
    placeholderStyle: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
    },
    radioContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    radioButtonName: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,

      marginStart: 8,
    },
    searchContainer: {
      marginVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.g1,
      flexDirection: "row",
    },
    searchInput: {
      marginStart: 12,
      width: "100%",
    },
    selectedTextStyle: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.primary,
    },
    title: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g5,
      marginTop: 24,
    },
    item: {
      padding: 17,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 24,
    },
    textItem: {
      flex: 1,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.g1,
    },
  });
}

const Register: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const [name, setName] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [region, setRegion] = useState<any>();

  const [ministry, setMinistry] = useState<any>();
  const [selected, setSelected] = useState([]);

  const [image, setImage] = useState<any>(
    require("../assets/avatars/Starting/StartingAvatar.png")
  );

  const { phone, setCurrentUser, createNewUser } = useContext(AuthContext);
  return (
    <MainLayout customStyles={getStyles(theme).container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={getStyles(theme).innerContainer}>
          <Text style={getStyles(theme).heading}>Register</Text>
          <View style={getStyles(theme).imageContainer}>
            <Image
              source={
                gender === ""
                  ? require("../assets/avatars/Starting/StartingAvatar.png")
                  : image
              }
              style={getStyles(theme).image}
            />
          </View>
          <Text style={getStyles(theme).title}>Name</Text>
          <View style={getStyles(theme).searchContainer}>
            <TextInput
              style={getStyles(theme).searchInput}
              onChangeText={(username) => setName(username)}
              placeholder="Enter Full Name"
            />
          </View>
          <Text style={getStyles(theme).title}>Gender</Text>
          <View style={getStyles(theme).radioContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={getStyles(theme).firstItem}
              onPress={() => {
                setGender("Female");
                setImage(female[Math.floor(Math.random() * female.length)]);
              }}
            >
              <RadioButtonIcon
                color={
                  gender === "Female" ? theme.colors.primary : theme.colors.g1
                }
                colorFill={
                  gender === "Female"
                    ? theme.colors.primary
                    : theme.colors.background
                }
              />
              <Text
                style={{
                  ...getStyles(theme).radioButtonName,
                  color:
                    gender === "Female"
                      ? theme.colors.primary
                      : theme.colors.g1,
                }}
              >
                Female
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={getStyles(theme).items}
              onPress={() => {
                setGender("Male");
                setImage(male[Math.floor(Math.random() * male.length)]);
              }}
            >
              <RadioButtonIcon
                color={
                  gender === "Male" ? theme.colors.primary : theme.colors.g1
                }
                colorFill={
                  gender === "Male"
                    ? theme.colors.primary
                    : theme.colors.background
                }
              />
              <Text
                style={{
                  ...getStyles(theme).radioButtonName,
                  color:
                    gender === "Male" ? theme.colors.primary : theme.colors.g1,
                }}
              >
                Male
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={getStyles(theme).items}
              onPress={() => {
                setGender("Other");
                setImage(
                  require("../assets/avatars/Starting/StartingAvatar.png")
                );
              }}
            >
              <RadioButtonIcon
                color={
                  gender === "Other" ? theme.colors.primary : theme.colors.g1
                }
                colorFill={
                  gender === "Other"
                    ? theme.colors.primary
                    : theme.colors.background
                }
              />
              <Text
                style={{
                  ...getStyles(theme).radioButtonName,
                  color:
                    gender === "Other" ? theme.colors.primary : theme.colors.g1,
                }}
              >
                Others
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={getStyles(theme).title}>Select Region</Text>
          {/* <DropdownComponent
            value={region}
            myData={regions}
            onChange={(item) => {
              console.log(item), setRegion(item);
            }}
            colorStyle={{
              tintColor: region ? theme.colors.primary : theme.colors.g1,
            }}
          />

          <Text style={getStyles(theme).title}>Select Ministry</Text> */}
          <MultiSelect
            style={getStyles(theme).multiSelectDropdown}
            placeholderStyle={getStyles(theme).multiSelectPlaceholder}
            selectedTextStyle={getStyles(theme).multiSelectedText}
            inputSearchStyle={getStyles(theme).multiSelectInputSearch}
            iconStyle={{
              ...getStyles(theme).multiSelectIconStyle,
              tintColor: region ? theme.colors.primary : theme.colors.g1,
            }}
            data={regions}
            containerStyle={getStyles(theme).multiSelectDropdownItemContainer}
            maxHeight={300}
            showsVerticalScrollIndicator={false}
            labelField="label"
            activeColor={"#E5E5E5"}
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            alwaysRenderItemSelected
            //renderItem={renderItem}
            value={selected}
            onChange={(item) => {
              setSelected(item);
              setRegion(item);
            }}
            selectedStyle={getStyles(theme).multiSelectSelectedStyle}
          />
        </View>

        <View style={getStyles(theme).buttonContainer}>
          <Button
            disabled={gender && name && region ? false : true}
            onPress={async () => {
              //console.log(ministry.map((it: any) => ministries[it].label));
              AsyncStorage.getItem("fcmToken").then((fcmToken) => {
                createNewUser(
                  {
                    name,
                    contact: phone,
                    gender,
                    pibs: [region],
                    region: region.label,
                    fcmToken,
                    avatar: "OK",
                    ministries: ministry,
                  },
                  (data: any) => {
                    const user = jwtDecode(data);
                    //console.log(user);
                    setCurrentUser(user);
                    AsyncStorage.setItem("CURRENT_USER", JSON.stringify(user));
                    navigation.navigate(
                      "AppNavigation",
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "AppNavigation" }],
                      })
                    );
                  }
                );
              });
            }}
          >
            Register
          </Button>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

const DropdownComponent: React.FC<{
  myData?: any;
  value: string;
  colorStyle?: any;
  onChange: (value: any) => void;
}> = ({ myData, value, onChange, colorStyle }) => {
  const renderItem = (item: any) => {
    return (
      <View style={getStyles(theme).item}>
        <Text style={getStyles(theme).textItem}>{item.label}</Text>
      </View>
    );
  };
  const { theme } = useContext(ThemeContext);
  return (
    <Dropdown
      style={getStyles(theme).dropdown}
      placeholderStyle={getStyles(theme).placeholderStyle}
      selectedTextStyle={getStyles(theme).selectedTextStyle}
      inputSearchStyle={getStyles(theme).inputSearchStyle}
      iconStyle={{ ...getStyles(theme).iconStyle, ...colorStyle }}
      data={myData}
      containerStyle={getStyles(theme).dropdownItemContainer}
      iconColor={theme.colors.g1}
      activeColor={"#E5E5E5"}
      showsVerticalScrollIndicator={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      //searchPlaceholder="Search..."
      //value={value}
      onChange={onChange}
      //renderItem={renderItem}
    />
  );
};

const renderItem = (item: any) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={getStyles(theme).item}>
      <Text style={getStyles(theme).textItem}>{item.label}</Text>
    </View>
  );
};
export default Register;
