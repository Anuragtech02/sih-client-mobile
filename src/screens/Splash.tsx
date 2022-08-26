import React, { useContext, useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import StackNavigatorContext, {
  useStackNavigator,
} from "../navigation/stackNaviagtionContext";
import { AuthContext, ThemeContext } from "../utils/contexts";
import { ITheme } from "../utils/contexts/interfaces";

const Splash: React.FC<{ navigation: any }> = ({ navigation }) => {
  //const { navigation } = useStackNavigator();
  const { currentUser } = useContext(AuthContext);
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
    setTimeout(() => {
      navigation.navigate("ChooseLanguageScreen");
    }, 3000);
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
