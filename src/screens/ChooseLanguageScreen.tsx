import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Animated,
} from "react-native";
import TickIcon from "../assets/icons/TickIcon";
import { Button, Card } from "../components";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/ThemeContext";
import MainLayout from "../layouts/MainLayout";

const data = [
  {
    id: "1",
    language: "English",
    startingLetter: "A",
  },
  {
    id: "2",
    language: "हिन्दी",
    startingLetter: "अ",
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
];

const colors = [
  "#4091DB",
  "#38B6C7",
  "#4CB74C",
  "#31B27C",
  "#D84A1D",
  "#F4C01E",
  "#794A4A",
  "#8B1EF4",
  "#ED9A72",
];

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    animatedButton: {
      position: "absolute",
      alignSelf: "center",
      width: "100%",
    },
    cardContainer: {
      width: 150,
      height: 150,
      marginTop: 20,
      marginHorizontal: 10,
    },
    contentStyle: {
      alignItems: "center",
      paddingBottom: 50,
    },
    headerContainer: { marginTop: 20 },
    headerHeading: {
      fontFamily: theme.fonts.title.fontFamily,
      fontSize: theme.fonts.title.fontSize,
      color: theme.colors.primary,
      fontWeight: "700",
    },
    headerStyle: {
      marginStart: 24,
      alignSelf: "flex-start",
    },
    innerContainer: {
      width: "100%",
    },
    languageFirstLetter: {
      alignSelf: "center",
      marginTop: 16,
      fontSize: 50,
      fontWeight: "800",
      fontFamily: "Poppins-Black",
    },
    languageName: {
      alignSelf: "flex-start",
      fontSize: 16,
    },
    onClickedView: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 150,
      height: 150,
      borderRadius: 8,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
}

function ChooseLanguageScreen() {
  const [selectedId, setSelectedId] = useState<string>("");
  const { theme } = useContext(ThemeContext);

  return (
    <MainLayout>
      <FlatList
        contentContainerStyle={getStyles(theme).contentStyle}
        ListHeaderComponentStyle={getStyles(theme).headerStyle}
        ListHeaderComponent={
          <View style={getStyles(theme).headerContainer}>
            <Text style={getStyles(theme).headerHeading}>Choose Language </Text>
            <Text style={getStyles(theme).headerHeading}>भाषा चुनें</Text>
          </View>
        }
        numColumns={2}
        data={data.map((it, i) => ({
          ...it,
          color: colors[i % colors.length],
        }))}
        keyExtractor={(item) => item.id}
        renderItem={(data: any) => (
          <StyledCard
            data={data}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            theme={theme}
          />
        )}
      />

      {selectedId && (
        <FadeInView theme={theme}>
          <View style={getStyles(theme).innerContainer}>
            <Button customStyle={{}}>Continue</Button>
          </View>
        </FadeInView>
      )}
    </MainLayout>
  );
}
export default ChooseLanguageScreen;

const StyledCard: React.FC<{
  data: any;
  selectedId: string;
  setSelectedId: (data: any) => void;
  theme: any;
}> = ({ data, selectedId, setSelectedId, theme }) => {
  return (
    <Card
      onPress={() =>
        setSelectedId(selectedId === data?.item?.id ? "" : data?.item?.id)
      }
      style={{
        ...getStyles(theme).cardContainer,
        backgroundColor: `${data.item.color}33`,
      }}
    >
      <Text
        style={{
          ...getStyles(theme).languageName,
          color: data.item.color,
        }}
      >
        {data.item.language}
      </Text>
      <Text
        style={{
          ...getStyles(theme).languageFirstLetter,
          color: data.item.color,
        }}
      >
        {data.item.startingLetter}
      </Text>
      {selectedId === data.item.id && (
        <View style={getStyles(theme).onClickedView}>
          <TickIcon />
        </View>
      )}
    </Card>
  );
};

const FadeInView: React.FC<{ children: any; theme: any }> = ({
  children,
  theme,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <MainLayout>
      <Animated.View
        style={{ ...getStyles(theme).animatedButton, bottom: fadeAnim }}
      >
        {children}
      </Animated.View>
    </MainLayout>
  );
};
