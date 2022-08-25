import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Animated,
  Easing,
} from "react-native";
import TickIcon from "../assets/icons/TickIcon";
import { Button, Card } from "../components";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import MainLayout from "../layouts/MainLayout";
import metrics from "../utils/metrics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APP_LANGUAGE } from "../utils/constants";

const languageOptions = [
  {
    id: "hi",
    language: "हिन्दी",
    startingLetter: "अ",
  },
  {
    id: "en",
    language: "English",
    startingLetter: "A",
  },
  {
    id: "be",
    language: "Bengali-বাংলা",
    startingLetter: "আ",
  },
  {
    id: "ma",
    language: "Marathi-मराठी",
    startingLetter: "आ",
  },
  {
    id: "tl",
    language: "Telugu-తెలుగు",
    startingLetter: "అ",
  },
  {
    id: "tm",
    language: "Tamil-தமிழ்",
    startingLetter: "அ",
  },
  {
    id: "ml",
    language: "Malayalam-മലയാളം",
    startingLetter: "അ",
  },
  {
    id: "kn",
    language: "Kannad-ಕನ್ನಡ",
    startingLetter: "ಅ",
  },
  {
    id: "gu",
    language: "Gujarati-ગુજરાતી",
    startingLetter: "અ",
  },
  // {
  //   id: "10",
  //   language: "Marathi-मराठी",
  //   startingLetter: "आ",
  // },
];

const colors = [
  "#4091DB",
  "#4CB74C",
  "#31B27C",
  "#D84A1D",
  "#F4C01E",
  "#38B6C7",
  "#794A4A",
  "#8B1EF4",
  "#ED9A72",
  "#F41E1E",
  // "#D84A1D",
];

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    animatedButtonContainer: {
      position: "absolute",
      // alignSelf: "center",
      width: "96%",
      // paddingHorizontal: 13,
      // paddingHorizontal: 20,
    },
    cardContainer: {
      width: 150,
      height: 110,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      marginTop: 10,
      // marginHorizontal: 10,
    },
    contentStyle: {
      alignItems: "flex-start",
      paddingBottom: 30,
      //minHeight: , Dimension se leke daalan hai yaha
    },
    headerContainer: { marginTop: 20 },
    headerHeading: {
      fontFamily: theme.fonts.title.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      color: theme.colors.primary,
      marginVertical: 4,
      fontWeight: "700",
    },
    widthContainer: {
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    headerStyle: {
      alignSelf: "flex-start",
      marginLeft: 0,
    },
    buttonContainer: {
      alignSelf: "center",
      width: "100%",
    },
    languageFirstLetter: {
      fontSize: 36,
      fontWeight: "800",
      fontFamily: "Poppins-Black",
    },
    languageName: {
      alignSelf: "flex-start",
      position: "absolute",
      top: 6,
      left: 8,
      fontSize: 11,
      fontFamily: theme.fonts.body.fontFamily,
    },
    tickContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 150,
      height: 110,
      borderRadius: 8,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
}

const ChooseLanguage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState<string>("");
  const { theme } = useContext(ThemeContext);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSBtn = function handleShowButton() {
    Animated.timing(slideAnim, {
      toValue: 60,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };
  const handleHBtn = function handleHideButton() {
    Animated.timing(slideAnim, {
      toValue: -130,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };

  useEffect(() => {
    selectedId ? handleSBtn() : handleHBtn();
  }, [selectedId]);
  return (
    <MainLayout
      customStyles={{
        alignItems: "center",
        // paddingHorizontal: 10,
        backgroundColor: theme.colors.background,
      }}
      disableDefaultPadding
    >
      <View style={getStyles(theme).widthContainer}>
        <FlatList
          style={{ minHeight: metrics.screenHeight }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            ...getStyles(theme).contentStyle,
            paddingBottom: 130,
          }}
          ListHeaderComponentStyle={getStyles(theme).headerStyle}
          ListHeaderComponent={
            <View style={getStyles(theme).headerContainer}>
              <Text style={getStyles(theme).headerHeading}>
                Choose Language{" "}
              </Text>
              <Text style={getStyles(theme).headerHeading}>भाषा चुनें</Text>
            </View>
          }
          numColumns={2}
          data={languageOptions?.map((it, i) => ({
            ...it,
            color: colors[i % colors.length],
          }))}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <StyledCard
              index={index}
              data={item}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              theme={theme}
            />
          )}
        />

        <Animated.View
          style={{
            ...getStyles(theme).animatedButtonContainer,
            bottom: slideAnim,
          }}
        >
          <View style={getStyles(theme).buttonContainer}>
            <Button
              customStyle={{}}
              onPress={() => {
                AsyncStorage.setItem(APP_LANGUAGE, selectedId);
                navigation.navigate("LoginScreen");
              }}
            >
              Continue
            </Button>
          </View>
        </Animated.View>
      </View>
    </MainLayout>
  );
};

const StyledCard: React.FC<{
  data: any;
  selectedId: string;
  setSelectedId: (data: any) => void;
  theme: any;
  index: number;
}> = ({ data, selectedId, setSelectedId, theme, index }) => {
  return (
    <Card
      onPress={() => setSelectedId(selectedId === data?.id ? "" : data?.id)}
      activeOpacity={1}
      style={{
        ...getStyles(theme).cardContainer,
        backgroundColor: `${data?.color}33`,
        // marginRight: index % 2 === 0 ? 10 : 0,
        marginLeft: index % 2 !== 0 ? 10 : 0,
      }}
    >
      <Text
        style={{
          ...getStyles(theme).languageName,
          color: data?.color,
        }}
      >
        {data?.language}
      </Text>
      <Text
        style={{
          ...getStyles(theme).languageFirstLetter,
          color: data?.color,
        }}
      >
        {data?.startingLetter}
      </Text>
      {selectedId === data?.id && (
        <View style={getStyles(theme).tickContainer}>
          <TickIcon />
        </View>
      )}
    </Card>
  );
};

export default ChooseLanguage;
