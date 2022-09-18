import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";

import { IS_FIRST_TIME } from "../utils/constants";
import { AuthContext, ThemeContext } from "../utils/contexts";
import { ITheme } from "../utils/contexts/interfaces";

const Splash: React.FC<{ navigation: any }> = ({ navigation }) => {
  //const { navigation } = useStackNavigator();
  const { setCurrentUser } = useContext(AuthContext);
  function getStyle(theme: ITheme): any {
    return StyleSheet.create({
      heading: {
        fontSize: 22,
        marginTop: 16,
        color: theme.colors.black,
      },
      subHeading: {
        fontSize: 16,
        marginTop: 16,
        color: theme.colors.g1,
      },
    });
  }

  useEffect(() => {
    async function initialize() {
      const firstTime = await AsyncStorage.getItem("IS_FIRST_TIME");
      if (!firstTime) {
        AsyncStorage.setItem(IS_FIRST_TIME, "true");
      }
    }
    async function getCurrentUser() {
      const user = await AsyncStorage.getItem("CURRENT_USER");
      const firstTime = await AsyncStorage.getItem("IS_FIRST_TIME");
      if (user) {
        setCurrentUser(JSON.parse(user));
        navigation.navigate(
          "AppNavigation",
          navigation.reset({
            index: 0,
            routes: [{ name: "AppNavigation" }],
          })
        );
        return;
      }
      setTimeout(() => {
        if (firstTime === "false") {
          navigation.navigate(
            "LoginScreen",
            navigation.reset({
              index: 0,
              routes: [{ name: "LoginScreen" }],
            })
          );
        } else {
          navigation.navigate(
            "ChooseLanguageScreen",
            navigation.reset({
              index: 0,
              routes: [{ name: "ChooseLanguageScreen" }],
            })
          );
        }
      }, 3000);
    }
    initialize();
    getCurrentUser();
  }, []);

  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout
      customStyles={{
        height: "100%",
        justifyContent: "flex-start",
        marginTop: "30%",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: "80%" }}
        source={require("../assets/pibSplash.png")}
      />
      <Text style={getStyle(theme).heading}>Press Information Bureau</Text>
      <Text style={getStyle(theme).subHeading}>Goverment of India</Text>
    </MainLayout>
  );
};

export default Splash;
