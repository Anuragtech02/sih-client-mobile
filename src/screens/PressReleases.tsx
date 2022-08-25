import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { IArticleCard, ITheme } from "../utils/contexts/interfaces";
import { ArticleContext, AuthContext, ThemeContext } from "../utils/contexts";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Card } from "../components";
import metrics from "../utils/metrics";
import { MAIN_LAYOUT_DEFAULT_PADDING } from "../utils/constants";
import StackNavigatorContext, {
  useStackNavigator,
} from "../navigation/stackNaviagtionContext";
import { ClockIcon, EyeIcon, SavedIcon, ShareIcon } from "../assets/icons";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    articelHeading: {
      fontSize: theme.fonts.body.fontSize,
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
      marginHorizontal: 12,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
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
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
    image: {
      width: "100%",
      height: 100,
      borderRadius: 8,
    },
    iconWithText: {
      flexDirection: "row",
      alignItems: "center",
      // backgroundColor: "red",
      // height: 50,
      marginRight: 15,
    },
    icon: {
      width: 16,
    },
    text: {
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

// const data = [
//   {
//     id: "1",
//     image: require("../assets/PressReleases.png"),
//     heading: "President of india reached the netherlands yesterday",
//     time: "2 hours ago",
//     views: "1.2k",
//   },
//   {
//     id: "2",
//     image: require("../assets/PressReleases.png"),
//     heading: "President of india reached the netherlands yesterday",
//     time: "2 hours ago",
//     views: "1.2k",
//   },
//   {
//     id: "3",
//     image: require("../assets/PressReleases.png"),
//     heading: "President of india reached the netherlands yesterday",
//     time: "2 hours ago",
//     views: "1.2k",
//   },
//   {
//     id: "4",
//     image: require("../assets/SavedPhotos.png"),
//     heading: "President of india reached the netherlands yesterday",
//     time: "2 hours ago",
//     views: "1.2k",
//   },
// ];

const PressReleases: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const { theme } = useContext(ThemeContext);
  const { articles, articleLoading } = useContext(ArticleContext);
  const { navigation: myNavigation } = useStackNavigator();
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
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <HomeCard article={item} />}
        />
      )}
    </MainLayout>
  );
};

const HomeCard: React.FC<{
  article: any;
}> = ({ article }) => {
  const { navigation } = useContext(StackNavigatorContext);

  function onPress() {
    navigation.navigate("WebViewArticle", {
      id: article._id,
      value: article.link,
    });
  }
  const {
    thumbnail: image,
    title: articleHeading,
    createdAt: time,
    created,
    views,
    id: _id,
  } = article;
  const { theme } = useContext(ThemeContext);
  const [isSaved, setIsSaved] = useState(false);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  function handlePressSave() {
    setIsSaved((prev) => !prev);
    const newSavedArticles = [...currentUser.savedArticles, article];
    return () => {
      setCurrentUser((prev: any) => ({
        ...prev,
        savedArticles: newSavedArticles,
      }));
    };
  }
  function handleShare() {}

  return (
    <Card
      activeOpacity={1}
      onPress={onPress}
      style={getStyle(theme).cardContainer}
    >
      <View style={getStyle(theme).innerContainer}>
        <Image source={{ uri: image }} style={getStyle(theme).image} />
        <Text style={getStyle(theme).articelHeading}>{articleHeading}</Text>
        <View style={getStyle(theme).iconContainer}>
          <View style={getStyle(theme).iconWithText}>
            <ClockIcon
              width={18}
              customStyle={getStyle(theme).icon}
              color={theme.colors.g1}
            />
            <Text style={getStyle(theme).text}>
              {new Date(created).toLocaleDateString()}
            </Text>
          </View>

          <View style={getStyle(theme).iconWithText}>
            <EyeIcon
              width={18}
              customStyle={getStyle(theme).icon}
              color={theme.colors.g1}
            />
            <Text style={getStyle(theme).text}>{views || 0}</Text>
          </View>

          <View style={{ marginStart: "auto", flexDirection: "row" }}>
            <View
              onStartShouldSetResponder={(event: any) => true}
              onTouchEnd={(e) => {
                e.stopPropagation();
              }}
            >
              <TouchableOpacity onPress={handleShare}>
                <ShareIcon
                  width={18}
                  color={theme.colors.g1}
                  customStyle={{ marginEnd: 12 }}
                />
              </TouchableOpacity>
            </View>
            <View
              onStartShouldSetResponder={(event: any) => true}
              onTouchEnd={(e) => {
                e.stopPropagation();
              }}
            >
              <TouchableOpacity onPress={handlePressSave}>
                <SavedIcon
                  width={18}
                  opacity={0}
                  color={isSaved ? theme.colors.regionalColor : theme.colors.g1}
                  colorFill={
                    isSaved ? theme.colors.regionalColor : theme.colors.white
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default PressReleases;

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
