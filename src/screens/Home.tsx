import React, { useContext, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { AuthContext, LocaleContext, ThemeContext } from "../utils/contexts";
import {
  BlueThemeIcon,
  DrawerIcon,
  GreenThemeIcon,
  LavenderThemeIcon,
  OrangeThemeIcon,
  PinkThemeIcon,
  ReddishBrownThemeIcon,
  ReddishOrangeThemeIcon,
  SearchIcon,
  YellowThemeIcon,
} from "../assets/icons";
import TopTabsNavigation from "../navigation/TopTabsNavigation";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { SelectedContext } from "../utils/contexts/drawerContext";
import { StackNavigatorContext } from "../navigation/stackNaviagtionContext";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    drawerContainer: {
      marginStart: "auto",
      marginEnd: 12,
    },
    greetings: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
    innerContainer: {
      marginTop: 24,
      paddingHorizontal: 24,
    },
    name: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.primary,
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
      borderColor: theme.colors.g1,
      flexDirection: "row",
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

const { width, height } = Dimensions.get("screen");

const Home: React.FC = () => {
  const [selectedId, setSelectedId] = useState<boolean>(false);
  const slideAnim = useRef(new Animated.Value(-width)).current;

  const handleSBtn = function handleShowButton() {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };
  const handleHBtn = function handleHideButton() {
    Animated.timing(slideAnim, {
      toValue: -width,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };

  useEffect(() => {
    selectedId ? handleSBtn() : handleHBtn();
  }, [selectedId]);

  const { theme, currentRegion } = useContext(ThemeContext);
  const { userDetails } = useContext(AuthContext);
  const { translations, initializeAppLanguage } = useContext(LocaleContext);

  useEffect(() => {
    initializeAppLanguage();
  }, [initializeAppLanguage]);

  return (
    <SelectedContext.Provider value={{ setSelectedId }}>
      <MainLayout
        customStyles={getStyle(theme).container}
        disableDefaultPadding={true}
      >
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
        <Animated.View
          style={{
            position: "absolute",
            zIndex: 2,
            elevation: 2,
            top: 0,
            height,
            width,
            left: slideAnim,
            backgroundColor: "red",
          }}
        >
          <CustomDrawerContent onPress={() => setSelectedId(false)} />
        </Animated.View>
        <View style={getStyle(theme).innerContainer}>
          <View style={getStyle(theme).drawerContainer}>
            <DrawerIcon customOnPress={() => setSelectedId(true)} />
          </View>

          <View style={getStyle(theme).profileContainer}>
            <Text style={getStyle(theme).name}>
              {translations.formatString(translations["home.greeting"], {
                name: userDetails?.name,
              })}
            </Text>
            <Text style={getStyle(theme).greetings}>
              {translations["home.greeting2"]}
            </Text>
            <Image
              style={getStyle(theme).profilePhoto}
              source={require("../assets/ProfilePhoto.png")}
            />
          </View>

          <View style={getStyle(theme).searchContainer}>
            <TextInput
              style={getStyle(theme).searchInput}
              placeholder="Search"
            />
            <SearchIcon
              customStyles={getStyle(theme).search}
              color={theme.colors.absoluteWhite}
              width={48}
              height={48}
            />
          </View>
        </View>

        <TopTabsNavigation />
      </MainLayout>
    </SelectedContext.Provider>
  );
};

export default Home;
