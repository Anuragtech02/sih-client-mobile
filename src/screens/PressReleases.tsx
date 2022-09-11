import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Share,
  TouchableOpacity,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { IArticleCard, ITheme } from "../utils/contexts/interfaces";
import { ArticleContext, AuthContext, ThemeContext } from "../utils/contexts";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Card } from "../components";
import metrics from "../utils/metrics";
import { MAIN_LAYOUT_DEFAULT_PADDING } from "../utils/constants";

import {
  ClockIcon,
  EyeIcon,
  PinkThemeIcon,
  SavedIcon,
  ShareIcon,
} from "../assets/icons";
import { regionalThemes } from "../utils/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from "react-native-element-dropdown";
import { StackNavigatorContext } from "../navigation/stackNaviagtionContext";

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
      marginBottom: 12,
      marginHorizontal: 12,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    dropdown: {
      height: 50,
      backgroundColor: theme.colors.background,
      borderRadius: 4,
      padding: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      color: theme.colors.primary,
      elevation: 2,
      marginBottom: 24,
    },
    dropdownItemContainer: {
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
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      backgroundColor: theme.colors.background,
    },
    placeholderStyle: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
    },
    selectedTextStyle: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.primary,
    },
    selectSize: {
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.g1,
      marginBottom: 8,
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
const filterOptions = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last Week", value: "lastWeek" },
  { label: "Last Month", value: "lastMonth" },
];
const PressReleases: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const [filter, setFilter] = useState("");
  const { theme, currentRegion } = useContext(ThemeContext);
  const { articlesOwn: articles, articleLoading } = useContext(ArticleContext);
  const [tempArticles, setTempArticles] = useState<any>();

  // useEffect(() => {
  //   console.log(filter);
  // });
  // useEffect(() => {
  //   function handleFilter() {
  //     const newData = oldData.map((item) => item2);
  //   }
  //   handleFilter();
  // }, [filter]);
  useEffect(() => {
    setTempArticles(articles);
  }, [articles]);
  return (
    <MainLayout
      customStyles={getStyle(theme).container}
      disableDefaultPadding={true}
    >
      <View
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <DropdownComponent
          style={{ width: 150, marginRight: 10, marginTop: 5 }}
          value={filter}
          onChange={setFilter}
          myData={filterOptions}
        />
      </View>
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
          contentContainerStyle={{ paddingBottom: 24 }}
          data={tempArticles}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <HomeCard article={item} />}
        />
      )}
    </MainLayout>
  );
};
export const DropdownComponent: React.FC<{
  myData?: any;
  value: string;
  style?: any;
  onChange: (value: any) => void;
}> = ({ myData, value, onChange, style }) => {
  const renderItem = (item: any) => {
    return (
      <View style={getStyle(theme).item}>
        <Text style={getStyle(theme).textItem}>{item.label}</Text>
      </View>
    );
  };
  const { theme } = useContext(ThemeContext);
  return (
    <Dropdown
      style={{ ...getStyle(theme).dropdown, ...style }}
      placeholderStyle={getStyle(theme).placeholderStyle}
      selectedTextStyle={getStyle(theme).selectedTextStyle}
      inputSearchStyle={getStyle(theme).inputSearchStyle}
      iconStyle={getStyle(theme).iconStyle}
      data={myData}
      containerStyle={getStyle(theme).dropdownItemContainer}
      iconColor={theme.colors.g1}
      showsVerticalScrollIndicator={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={onChange}
      renderItem={renderItem}
    />
  );
};
const HomeCard: React.FC<{
  article: any;
}> = ({ article }) => {
  const { navigation } = useContext(StackNavigatorContext);

  function onPress() {
    navigation.navigate("Article", {
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
  const { theme, currentRegion } = useContext(ThemeContext);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  async function handlePressSave() {
    isSaved ? setIsSaved(false) : setIsSaved(true);

    const prev = await AsyncStorage.getItem("articles");
    if (prev) {
      const prevData = JSON.parse(prev);

      const res = await AsyncStorage.setItem(
        "articles",
        JSON.stringify([...prevData, article])
      );
    } else {
      await AsyncStorage.setItem("articles", JSON.stringify([article]));
    }

    //const newSavedArticles = [...currentUser.savedArticles, article]; ERROR
    // return () => {
    //   setCurrentUser((prev: any) => ({
    //     ...prev,
    //     savedArticles: newSavedArticles,
    //   }));
    // };
  }
  async function handleShare() {
    try {
      const result = await Share.share({
        message: article.link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

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
              <TouchableOpacity style={{ padding: 5 }} onPress={handleShare}>
                <ShareIcon
                  width={18}
                  color={regionalThemes[currentRegion].color}
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
              <TouchableOpacity
                style={{ padding: 5 }}
                onPress={handlePressSave}
              >
                <SavedIcon
                  width={18}
                  opacity={0}
                  color={
                    isSaved
                      ? regionalThemes[currentRegion].color
                      : theme.colors.g1
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
