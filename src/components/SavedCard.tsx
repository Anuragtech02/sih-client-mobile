import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import Card from "./Card";
import { ClockIcon, EyeIcon, SavedIcon } from "../assets/icons";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    articelHeading: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
      marginTop: 8,
    },
    cardContainer: {
      // borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRadius: 0,
      borderColor: theme.colors.g4,
      marginVertical: 12,
    },
    eyeContainer: {
      marginStart: 20,
    },
    iconContainer: {
      flexDirection: "row",
      marginTop: 12,
      alignItems: "center",
    },
    innerContainer: {
      width: "100%",
      // padding: 8,
    },
    image: {
      width: "100%",
      height: 100,
      borderRadius: 8,
    },
    time: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
      marginStart: 8,
    },
    views: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
      marginStart: 8,
    },
  });
}

const SavedCard: React.FC<{
  image: any;
  articleHeading: string;
  time: string;
  views: string;
  onPress: () => void;
}> = ({ image, articleHeading, time, views, onPress }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Card onPress={onPress} style={getStyle(theme).cardContainer}>
      <View style={getStyle(theme).innerContainer}>
        <Image source={{ uri: image }} style={getStyle(theme).image} />
        <Text style={getStyle(theme).articelHeading}>{articleHeading}</Text>
        <View style={getStyle(theme).iconContainer}>
          <ClockIcon color={theme.colors.g1} />
          <Text style={getStyle(theme).time}>{time}</Text>
          <View style={getStyle(theme).eyeContainer}>
            <EyeIcon color={theme.colors.g1} />
          </View>
          <Text style={getStyle(theme).views}>{views}</Text>

          <View style={{ marginStart: "auto" }}>
            <SavedIcon
              opacity={0}
              color={theme.colors.primary}
              colorFill={theme.colors.primary}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default SavedCard;
