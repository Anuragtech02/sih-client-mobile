import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { Card } from "../components";
import { PinkThemeIcon, ShareIcon } from "../assets/icons";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { regionalThemes } from "../utils/theme";

export const API_IMAGES = axios.create({
  baseURL: `https://dsalgo.tech/image`,
});

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    cardContainer: {
      backgroundColor: theme.colors.background, //theme.colors.background,
      marginVertical: 12,
      padding: 0,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    contentContainerStyle: {
      paddingBottom: 12,
    },
    heading: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
      color: theme.colors.primary,
    },
    headerHeading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
      color: theme.colors.primary,
      marginBottom: 12,
      marginTop: 24,
    },
    icon: { marginStart: "auto", marginEnd: 12 },
    image: { width: "100%" },
    subHeading: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.primary,
      marginRight: 50,
    },
    textContainer: {
      marginTop: 8,
      marginStart: 12,
    },
    time: {
      fontSize: 12,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
    },
    timeContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 12,
      marginBottom: 16,
    },
  });
}

const data = [
  {
    id: "1",
    image: require("../assets/photos.png"),
    heading: "Ministry of Finance",
    subHeading:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    time: "Aug 14, 2022",
  },
  {
    id: "2",
    image: require("../assets/photos.png"),
    heading: "Ministry of Finance",
    subHeading:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    time: "Aug 14, 2022",
  },
  {
    id: "3",
    image: require("../assets/photos.png"),
    heading: "Ministry of Finance",
    subHeading:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    time: "Aug 14, 2022",
  },
  {
    id: "4",
    image: require("../assets/photos.png"),
    heading: "Ministry of Finance",
    subHeading:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    time: "Aug 14, 2022",
  },
];

const Photos: React.FC = () => {
  const { theme, currentRegion } = useContext(ThemeContext);
  async function fetchPhotos() {
    const res = await API_IMAGES.get("/all");
    console.log(res?.data);
  }
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <MainLayout customStyles={getStyle(theme).container}>
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
      <FlatList
        ListHeaderComponent={
          <Text style={getStyle(theme).headerHeading}>Photos</Text>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={getStyle(theme).contentContainerStyle}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PhotoCard
            image={item.image}
            heading={item.heading}
            subHeading={item.subHeading}
            time={item.time}
          />
        )}
      />
    </MainLayout>
  );
};

const PhotoCard: React.FC<{
  image: any;
  heading: string;
  subHeading: string;
  time: string;
}> = ({ image, heading, subHeading, time }) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <Card onPress={() => {}} style={getStyle(theme).cardContainer}>
      <Image
        source={image}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        style={getStyle(theme).image}
      />
      <View style={getStyle(theme).textContainer}>
        <Text style={getStyle(theme).heading}>{heading}</Text>
        <Text style={getStyle(theme).subHeading}>{subHeading}</Text>
        <View style={getStyle(theme).timeContainer}>
          <Text style={getStyle(theme).time}>{time}</Text>
          <ShareIcon
            color={regionalThemes[currentRegion].color}
            customStyle={getStyle(theme).icon}
          />
        </View>
      </View>
    </Card>
  );
};

export default Photos;
