import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { DrawerIcon, SearchIcon } from "../assets/icons";
import TopTabsNavigation from "../navigation/TopTabsNavigation";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    greetings: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
    innerContainer: {
      paddingHorizontal: 24,
    },
    name: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
    },
    profileContainer: {
      marginTop: 24,
    },
    profilePhoto: {
      position: "absolute",
      right: 0,
    },
    search: {
      position: "absolute",
      right: 0,
    },
    searchContainer: {
      marginVertical: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#989898",
      flexDirection: "row",
      // backgroundColor: "red",
    },
    searchIcon: {
      position: "absolute",
      right: -1,
    },
    searchInput: {
      marginStart: 12,
      width: "100%",
    },
  });
}

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const [name, setName] = useState("Adarsh");
  return (
    <MainLayout
      customStyles={getStyle(theme).container}
      disableDefaultPadding={true}
    >
      <View style={getStyle(theme).innerContainer}>
        <View style={getStyle(theme).profileContainer}>
          <Text style={getStyle(theme).name}>{`Hi ${name},`}</Text>
          <Text style={getStyle(theme).greetings}>Welcome!</Text>
          <Image
            style={getStyle(theme).profilePhoto}
            source={require("../assets/ProfilePhoto.png")}
          />
        </View>
        <View style={getStyle(theme).searchContainer}>
          <TextInput style={getStyle(theme).searchInput} placeholder="Search" />
          <SearchIcon customStyles={getStyle(theme).search} />
        </View>
      </View>
      <TopTabsNavigation />
    </MainLayout>
  );
};
export default Home;
