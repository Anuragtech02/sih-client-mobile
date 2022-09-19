import React, { useContext, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/";
import { ScrollView } from "react-native-gesture-handler";
import { BackArrowIcon } from "../assets/icons";

const male = [
  { name: require("../assets/avatars/Male/Bengali.png"), id: "0" },
  { name: require("../assets/avatars/Male/Buddhist-monk.png"), id: "1" },
  { name: require("../assets/avatars/Male/Christian.png"), id: "2" },
  { name: require("../assets/avatars/Male/Group11.png"), id: "3" },
  { name: require("../assets/avatars/Male/Group12.png"), id: "4" },
  { name: require("../assets/avatars/Male/Group14.png"), id: "5" },
  { name: require("../assets/avatars/Male/Group15.png"), id: "6" },
  { name: require("../assets/avatars/Male/Group16.png"), id: "7" },
  { name: require("../assets/avatars/Male/Gujarati.png"), id: "8" },
  { name: require("../assets/avatars/Male/Jain.png"), id: "9" },
  { name: require("../assets/avatars/Male/Marathi.png"), id: "10" },
  { name: require("../assets/avatars/Male/Muslim.png"), id: "11" },
  { name: require("../assets/avatars/Male/Pandit.png"), id: "12" },
  { name: require("../assets/avatars/Male/Punjabi.png"), id: "13" },
  { name: require("../assets/avatars/Male/South_Indian.png"), id: "14" },
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

const MaleAvatars: React.FC<{ onPress: any; changeTo: any }> = ({
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
          {male.map((items: any) => (
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

export default MaleAvatars;
