import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { Card } from "../components";
import {
  BlueThemeIcon,
  GreenThemeIcon,
  LavenderThemeIcon,
  OrangeThemeIcon,
  PinkThemeIcon,
  ReddishBrownThemeIcon,
  ReddishOrangeThemeIcon,
  ShareIcon,
  YellowThemeIcon,
} from "../assets/icons";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { regionalThemes } from "../utils/theme";

export const API_IMAGES = axios.create({
  baseURL: `https://sih-server-staging.onrender.com/image`,
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
    image: { width: "100%", height: 200 },
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
    subHeading:
      "The Minister of State for Science & Technology and Earth Sciences (I/C), Prime Minister’s Office, Personnel, Public Grievances & Pensions, Atomic Energy and Space, Dr. Jitendra Singh addressing at the valedictory session of the 2-day ‘Centre-State Science Conclave’ at Science City, in Ahmedabad.",
    time: "Sep 11, 2022",
  },
  {
    id: "2",
    image: require("../assets/photos1.jpeg"),
    subHeading:
      "Gathering at the AGM of District Cooperatives of Amreli, in Gujarat. The Union Minister for Home Affairs and Cooperation, Shri Amit Shah addressing on the occasion.",
    time: "Sep 11, 2022",
  },
  {
    id: "3",
    image: require("../assets/photos2.jpeg"),
    subHeading:
      "The Union Minister for Home Affairs and Cooperation, Shri Amit Shah addressing at the AGM of District Cooperatives of Amreli, in Gujarat on",
    time: "Sep 11, 2022",
  },
  {
    id: "4",
    image: require("../assets/photos3.jpeg"),
    subHeading:
      "The Minister of State for Fisheries, Animal Husbandry & Dairying, Information and Broadcasting, Dr. L. Murugan visits the stalls at Fish Food Festival organised by Matsyakara Samithi at VRC grounds, in Nellore, Andhra Pradesh.",
    time: "Sep 11, 2022",
  },
  {
    id: "5",
    image: require("../assets/photos4.jpeg"),
    subHeading:
      "The Secretary, Ministry of Commerce and Industry, Shri BVR Subrahmanyam holds a media briefing, in New Delhi.",
    time: "Sep 03, 2022",
  },
];

const Photos: React.FC = () => {
  const { theme, currentRegion } = useContext(ThemeContext);
  async function fetchPhotos() {
    const res = await API_IMAGES.get("/all");
    //console.log(res?.data);
  }
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <MainLayout customStyles={getStyle(theme).container}>
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
  subHeading: string;
  time: string;
}> = ({ image, subHeading, time }) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <Card
      onPress={() => {}}
      style={getStyle(theme).cardContainer}
      activeOpacity={1}
    >
      <Image
        source={image}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        style={getStyle(theme).image}
        resizeMode="stretch"
      />
      <View style={getStyle(theme).textContainer}>
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
