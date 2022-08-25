import React, { useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { IArticleCard, ITheme } from "../utils/contexts/interfaces";
import { ArticleContext, ThemeContext } from "../utils/contexts";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { SavedCard } from "../components";
import metrics from "../utils/metrics";
import { MAIN_LAYOUT_DEFAULT_PADDING } from "../utils/constants";
import { useStackNavigator } from "../navigation/stackNaviagtionContext";

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

const SavedReleases: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const { theme } = useContext(ThemeContext);
  const { articlesOwn: articles, articleLoading } = useContext(ArticleContext);
  const { navigation: navigator } = useStackNavigator();
  return (
    <MainLayout
      customStyles={getStyle(theme).container}
      disableDefaultPadding={true}
    >
      {articleLoading ? (
        <View style={{ paddingTop: 10 }}>
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
          contentContainerStyle={{ marginTop: 12, paddingBottom: 24 }}
          data={articles}
          keyExtractor={(itme) => itme._id}
          renderItem={({ item }) => (
            <SavedCard
              image={item.thumbnail}
              articleHeading={item.title}
              time={new Date(item.createdAt).toLocaleString()}
              views={item.views?.toString()}
              onPress={() => {
                navigator.navigate("Article", { id: item._id });
              }}
            />
          )}
        />
      )}
    </MainLayout>
  );
};
export default SavedReleases;

const LoadingSkeleton = () => {
  const width = metrics.screenWidth - MAIN_LAYOUT_DEFAULT_PADDING * 3;
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="column">
        <SkeletonPlaceholder.Item
          width={width}
          height={100}
          marginTop={20}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={width}
          height={20}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={width}
          height={20}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={width}
          height={20}
          borderRadius={4}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
