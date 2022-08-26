import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import BackArrow from "../assets/icons/BackArrowIcon";
import { ClockIcon, DrawerIcon, EventIcon, ShareIcon } from "../assets/icons";
import { Card } from "../components";
import { regionalThemes } from "../utils/theme";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    articleHeading: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
      color: theme.colors.primary,
    },
    bodyContainer: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.primary,
    },
    cardContainer: {
      borderWidth: 1,
      borderColor: theme.colors.g4,
      marginVertical: 12,
    },
    container: {
      flex: 1,
      padding: 24,
      paddingHorizontal: 24,
      backgroundColor: theme.colors.background,
    },
    clockContainer: {
      flexDirection: "row",
      marginTop: 8,
      alignItems: "center",
      marginBottom: 12,
    },
    date: {
      marginStart: 8,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
    },
    eventContainer: {
      flexDirection: "row",
      marginTop: 16,
    },
    heading: {
      marginTop: 12,
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
      color: theme.colors.primary,
    },
    iconContainer: {
      flexDirection: "row",
    },
    shareIcon: { marginStart: "auto" },
    time: {
      marginStart: 8,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
    },
  });
}

const data = [
  {
    id: "1",
    heading: "Ministry of Finance",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "Aug 14, 2022",
    time: "9:00 AM",
  },
  {
    id: "2",
    heading: "Ministry of Finance",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "Aug 14, 2022",
    time: "9:00 AM",
  },
  {
    id: "3",
    heading: "Ministry of Finance",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "Aug 14, 2022",
    time: "9:00 AM",
  },
  {
    id: "4",
    heading: "Ministry of Finance",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "Aug 14, 2022",
    time: "9:00 AM",
  },
];

const MediaInvitations: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout
      customStyles={getStyle(theme).container}
      disableDefaultPadding={true}
    >
      <FlatList
        // ListHeaderComponent={
        //   <View>
        //     <View style={getStyle(theme).iconContainer}>
        //       <BackArrow
        //         customOnPress={() => navigation.navigate("Home")}
        //         color={theme.colors.primary}
        //       />
        //       <View style={{ marginStart: "auto" }}>
        //         <DrawerIcon customOnPress={() => navigation.openDrawer()} />
        //       </View>
        //     </View>
        //     <Text style={getStyle(theme).heading}>Media Invitations</Text>
        //   </View>
        // }
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MediaCard
            heading={item.heading}
            body={item.body}
            date={item.date}
            time={item.time}
          />
        )}
      />
    </MainLayout>
  );
};

const MediaCard: React.FC<{
  heading: string;
  body: string;
  date: string;
  time: string;
}> = ({ heading, body, date, time }) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <Card onPress={() => {}} style={getStyle(theme).cardContainer}>
      <Text style={getStyle(theme).articleHeading}>{heading}</Text>
      <Text style={getStyle(theme).bodyContainer}>{body}</Text>
      <View style={getStyle(theme).eventContainer}>
        <EventIcon color={theme.colors.g1} />
        <Text style={getStyle(theme).date}>{date}</Text>
      </View>
      <View style={getStyle(theme).clockContainer}>
        <ClockIcon color={theme.colors.g1} />
        <Text style={getStyle(theme).time}>{time}</Text>
        <ShareIcon
          color={regionalThemes[currentRegion].color}
          customStyle={getStyle(theme).shareIcon}
        />
      </View>
    </Card>
  );
};

export default MediaInvitations;
