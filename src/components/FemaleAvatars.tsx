import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/";
import { ScrollView } from "react-native-gesture-handler";
import { BackArrowIcon } from "../assets/icons";

const female = [
  { name: require("../assets/avatars/Female/Assamee.png"), id: "0" },
  { name: require("../assets/avatars/Female/Christian.png"), id: "1" },
  { name: require("../assets/avatars/Female/Group2.png"), id: "2" },
  { name: require("../assets/avatars/Female/Group5.png"), id: "3" },
  { name: require("../assets/avatars/Female/Group6.png"), id: "4" },
  { name: require("../assets/avatars/Female/Group9.png"), id: "5" },
  { name: require("../assets/avatars/Female/Group10.png"), id: "6" },
  { name: require("../assets/avatars/Female/Gujarati.png"), id: "7" },
  { name: require("../assets/avatars/Female/Hindu.png"), id: "8" },
  { name: require("../assets/avatars/Female/Kashmiri.png"), id: "9" },
  { name: require("../assets/avatars/Female/Manipuri.png"), id: "10" },
  { name: require("../assets/avatars/Female/Parsi.png"), id: "11" },
  { name: require("../assets/avatars/Female/Punjabi.png"), id: "12" },
  { name: require("../assets/avatars/Female/Rajasthani.png"), id: "13" },
  { name: require("../assets/avatars/Female/Hindu.png"), id: "14" },
];

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      marginTop: 16,
      justifyContent: "center",
    },
    scrollView: {
      alignItems: "flex-start",
    },
    innerContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    image: {
      height: 100,
      width: 100,
    },
    imageContainer: {
      paddingVertical: 16,
      paddingRight: 16,
    },
  });
}

const FemaleAvatars: React.FC<{ onPress: any; changeTo: any }> = ({
  onPress,
  changeTo,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={getStyles(theme).container}>
      <ScrollView
        contentContainerStyle={getStyles(theme).scrollView}
        showsVerticalScrollIndicator={false}
      >
        <BackArrowIcon
          color={theme.colors.primary}
          customStyles={{ marginStart: 28 }}
          customOnPress={onPress}
        />
        <View style={getStyles(theme).innerContainer}>
          {female.map((items: any) => (
            <TouchableOpacity
              style={getStyles(theme).imageContainer}
              onPress={() => changeTo(items.id)}
            >
              <Image source={items.name} style={getStyles(theme).image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FemaleAvatars;
