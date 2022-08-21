import React, { useContext } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { SavedCard } from "../components";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      padding: 0,
      margin: 0,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
  });
}

const data = [
  {
    id: "1",
    image: require("../assets/SavedPhotos.png"),
    heading: "President of india reached the netherlands yesterday",
    time: "2 hours ago",
    views: "1.2k",
  },
  {
    id: "2",
    image: require("../assets/SavedPhotos.png"),
    heading: "President of india reached the netherlands yesterday",
    time: "2 hours ago",
    views: "1.2k",
  },
  {
    id: "3",
    image: require("../assets/SavedPhotos.png"),
    heading: "President of india reached the netherlands yesterday",
    time: "2 hours ago",
    views: "1.2k",
  },
  {
    id: "4",
    image: require("../assets/SavedPhotos.png"),
    heading: "President of india reached the netherlands yesterday",
    time: "2 hours ago",
    views: "1.2k",
  },
];

const PressReleases: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout
      customStyles={getStyle(theme).container}
      disableDefaultPadding={true}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{ marginTop: 12, paddingBottom: 24 }}
        data={data}
        keyExtractor={(itme) => itme.id}
        renderItem={({ item }) => (
          <SavedCard
            image={item.image}
            articleHeading={item.heading}
            time={item.time}
            views={item.views}
          />
        )}
      />
    </MainLayout>
  );
};
export default PressReleases;
