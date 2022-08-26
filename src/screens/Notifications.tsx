import React, { useContext } from "react";
import { SectionList, StyleSheet, Text, View, Image } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { INotificationCard, ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { Button } from "../components";
import { PinkThemeIcon } from "../assets/icons";

export const API_NOTIFICATION = {};

const PIBImage = require("../assets/pib.png");
const notifications = [
  {
    title: "New",
    data: [
      {
        id: "1",
        title: "Ministry of Defence",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "2 hours ago",
      },
      {
        id: "2",
        title: "Ministry of Health and Family Welfare",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "9 hours ago",
      },
    ],
  },
  {
    title: "Earlier",
    data: [
      {
        id: "3",
        title: "Ministry of Defence",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "7 Aug 2022",
      },
      {
        id: "4",
        title: "Ministry of Health and Family Welfare",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "3 Aug 2022",
      },
      {
        id: "5",
        title: "Ministry of Finance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "3 Aug 2022",
      },
      {
        id: "6",
        title: "Ministry of Finance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "3 Aug 2022",
      },
      {
        id: "7",
        title: "Ministry of Finance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "3 Aug 2022",
      },
      {
        id: "8",
        title: "Ministry of Finance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: PIBImage,
        timestamp: "3 Aug 2022",
      },
    ],
  },
];

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    sectionList: {
      width: "100%",
    },
    actions: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      // backgroundColor: "pink",
      alignItems: "center",
      marginVertical: 8,
    },
    lButtons: {
      flexDirection: "row",
      // backgroundColor: "red",
    },
    allButton: {
      paddingVertical: 4,
      paddingHorizontal: 16,
    },
    unreadButton: {
      paddingVertical: 4,
      paddingHorizontal: 16,
    },
    rightButton: {
      flexDirection: "row",
      backgroundColor: "red",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
      alignSelf: "flex-start",
      color: theme.colors.p2,
      marginTop: 24,
    },
    sectionHeadingContainer: {},
    sectionHeading: {
      ...theme.default,
      fontWeight: "600",
      marginVertical: 7,
    },
    horizontalLine: {
      width: "300%",
      backgroundColor: theme.colors.g4,
      height: 1,
      marginVertical: 5,
    },
    leftButtons: {},
    rightButtons: {},
    notificationCard: {
      marginVertical: 5,
      flexDirection: "row",
    },
    timestampContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    timestamp: {
      color: theme.colors.g1,
      fontSize: 12,
    },
    cardLeftTitle: {
      color: theme.colors.p2,
      fontWeight: "500",
    },
    cardLeftDescription: {
      color: theme.colors.p2,
      fontWeight: "300",
    },
    timestampDot: {
      backgroundColor: theme.colors.p4,
      width: 8,
      height: 8,
      borderRadius: 10,
      marginRight: 6,
    },
    notificationCardRight: {
      paddingHorizontal: 12,
    },
    notificationCardLeft: {
      borderRadius: 50,
    },
  });
}

function Notifications() {
  const { theme, currentRegion } = useContext(ThemeContext);
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
      <Text style={getStyle(theme).heading}>Notifications</Text>
      <View style={getStyle(theme).actions}>
        <View style={getStyle(theme).lButtons}>
          <Button style={getStyle(theme).allButton}>All</Button>
          <Button
            customStyle={{ marginLeft: 8 }}
            style={getStyle(theme).unreadButton}
            variant="secondary"
          >
            Unread
          </Button>
        </View>
        <View style={getStyle(theme).rightButtons}>
          <Button variant="tertiary" style={getStyle(theme).markAsReadButton}>
            Mark all as read
          </Button>
        </View>
      </View>
      <SectionList
        sections={notifications}
        showsVerticalScrollIndicator={false}
        style={getStyle(theme).sectionList}
        keyExtractor={(item, index) => item?.title + index}
        renderItem={({ item }) => <NotificationCard item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={getStyle(theme).sectionHeadingContainer}>
            <Text style={getStyle(theme).sectionHeading}>{title}</Text>
            <View style={getStyle(theme).horizontalLine}></View>
          </View>
        )}
      />
    </MainLayout>
  );
}

const NotificationCard: React.FC<INotificationCard> = ({ item }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <View style={getStyle(theme).notificationCard}>
        <View style={getStyle(theme).notificationCardLeft}>
          <Image source={item.icon} />
        </View>
        <View style={getStyle(theme).notificationCardRight}>
          <Text style={getStyle(theme).cardLeftTitle}>{item.title}</Text>
          <Text style={getStyle(theme).cardLeftDescription}>
            {item.description}
          </Text>
          <View style={getStyle(theme).timestampContainer}>
            <View style={getStyle(theme).timestampDot}></View>
            <Text style={getStyle(theme).timestamp}>{item.timestamp}</Text>
          </View>
        </View>
      </View>
      <View style={getStyle(theme).horizontalLine}></View>
    </>
  );
};

export default Notifications;
