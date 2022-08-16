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

const languageOptions = [
  {
    id: "1",
    language: "हिन्दी",
    startingLetter: "अ",
  },
  {
    id: "2",
    language: "English",
    startingLetter: "A",
  },
  {
    id: "3",
    language: "Bengali-বাংলা",
    startingLetter: "আ",
  },
  {
    id: "4",
    language: "Marathi-मराठी",
    startingLetter: "आ",
  },
  {
    id: "5",
    language: "Telugu-తెలుగు",
    startingLetter: "అ",
  },
  {
    id: "6",
    language: "Tamil-தமிழ்",
    startingLetter: "அ",
  },
  {
    id: "7",
    language: "Malayalam-മലയാളം",
    startingLetter: "അ",
  },
  {
    id: "8",
    language: "Kannad-ಕನ್ನಡ",
    startingLetter: "ಅ",
  },
  {
    id: "9",
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
    animatedButton: {
      position: "absolute",
      alignSelf: "center",
      width: "100%",
      paddingHorizontal: 13,
    },
    cardContainer: {
      width: 150,
      height: 110,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      marginTop: 26,
      marginHorizontal: 10,
    },
    contentStyle: {
      alignItems: "flex-start",
      paddingBottom: 30,
      //minHeight: , Dimension se leke daalan hai yaha
    },
    headerContainer: { marginTop: 20, marginLeft: 8 },
    headerHeading: {
      fontFamily: theme.fonts.title.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      color: theme.colors.primary,
      marginVertical: 4,
      fontWeight: "700",
    },
    headerStyle: {
      alignSelf: "flex-start",
      marginLeft: 0,
    },
    buttonContainer: {
      width: "100%",
      paddingHorizontal: 7,
      alignItems: "center",
      // shadowColor: "black",
      // shadowOffset: { width: 4, height: 4 },
      // shadowOpacity: 1,
      // shadowRadius: 3,
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

const ChooseLanguage = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const { theme } = useContext(ThemeContext);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSBtn = function handleShowButton() {
    Animated.timing(slideAnim, {
      toValue: 50,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };
  const handleHBtn = function handleHideButton() {
    Animated.timing(slideAnim, {
      toValue: -100,
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
      }}
      disablePadding
    >
      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...getStyles(theme).contentStyle,
          paddingBottom: 130,
        }}
        ListHeaderComponentStyle={getStyles(theme).headerStyle}
        ListHeaderComponent={
          <View style={getStyles(theme).headerContainer}>
            <Text style={getStyles(theme).headerHeading}>Choose Language </Text>
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
      ></Animated.FlatList>

      {/* <FadeInView theme={theme}>
        <View style={getStyles(theme).innerContainer}>
          <Button customStyle={{}}>Continue</Button>
        </View>
      </FadeInView> */}
      <Animated.View
        style={{
          ...getStyles(theme).animatedButton,
          bottom: slideAnim,
        }}
      >
        <View style={getStyles(theme).buttonContainer}>
          <Button customStyle={{}}>Continue</Button>
        </View>
      </Animated.View>
    </MainLayout>
  );
};

const StyledCard: React.FC<{
  data: any;
  selectedId: string;
  setSelectedId: (data: any) => void;
  theme: any;
  index: number;
}> = ({ data, selectedId, setSelectedId, theme }) => {
  return (
    <Card
      onPress={() => setSelectedId(selectedId === data?.id ? "" : data?.id)}
      activeOpacity={1}
      style={{
        ...getStyles(theme).cardContainer,
        backgroundColor: `${data?.color}33`,
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

// const FadeInView: React.FC<{ children: any; theme: any }> = ({
//   children,
//   theme,
// }) => {

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 50,
//       duration: 100,
//       useNativeDriver: false,
//       easing: Easing.inOut(Easing.linear),
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <Animated.View
//       style={{ ...getStyles(theme).animatedButton, bottom: fadeAnim }}
//     >
//       {children}
//     </Animated.View>
//   );
// };

export default ChooseLanguage;
