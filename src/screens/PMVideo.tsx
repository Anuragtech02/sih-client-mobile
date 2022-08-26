import React, { useContext } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { Card } from "../components";
import { ShareIcon } from "../assets/icons";
import { FlatList } from "react-native-gesture-handler";
import { regionalThemes } from "../utils/theme";

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
    image: require("../assets/one.jpeg"),
    heading:
      "PM Modi addressed at the homi Bhabha Cancer Hospital and center...",
    time: "Aug 14, 2022",
  },
  {
    id: "2",
    image: require("../assets/two.jpeg"),
    heading:
      "PM Modi attends inaugural event of Amrita Hospital in Faridabad, Harya...",
    time: "Aug 14, 2022",
  },
  {
    id: "3",
    image: require("../assets/three.jpeg"),
    heading:
      "PM Modi Inaugurates State-of-the-art Amrita Hospital in Faridabad | PM...",
    time: "Aug 14, 2022",
  },
  {
    id: "4",
    image: require("../assets/four.jpeg"),
    heading: "PM Modi Addresses Har Ghar Jal Utsav in Goal PMO",
    time: "Aug 14, 2022",
  },
  {
    id: "5",
    image: require("../assets/five.jpeg"),
    heading:
      "PM Modi's walkthrough in Homi Bhabha Cancer Hospital & Research Centre...",
    time: "Aug 14, 2022",
  },
];

const PMVideos: React.FC = () => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <FlatList
        // ListHeaderComponent={
        //   <Text style={getStyle(theme).headerHeading}>Photos</Text>
        // }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={getStyle(theme).contentContainerStyle}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PhotoCard
            image={item.image}
            heading={item.heading}
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
  time: string;
}> = ({ image, heading, time }) => {
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
        <View style={getStyle(theme).timeContainer}>
          <Text style={getStyle(theme).time}>{time}</Text>
          <ShareIcon
            color={regionalThemes[currentRegion].color}
            customStyle={getStyle(theme).icon}
          />
        </View>
      </View>
      <Image
        source={require("../assets/Group123.png")}
        style={{
          position: "absolute",
          alignSelf: "center",
          top: 80,
          width: 50,
          height: 50,
        }}
      />
    </Card>
  );
};

export default PMVideos;
