import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Easing,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { IArticle, ITheme } from "../utils/contexts/interfaces";
import { ArticleContext, LocaleContext, ThemeContext } from "../utils/contexts";
import {
  BackArrowIcon,
  ClockIcon,
  EyeIcon,
  PlayIcon,
  SavedIcon,
  ShareIcon,
  TTSIcon,
} from "../assets/icons";
import MainLayout from "../layouts/MainLayout";
import TextToSpeech from "../utils/contexts/TextToSpeech";
import Slider from "@react-native-community/slider";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    iconContainer: {
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },

    content: {
      marginTop: 20,
      color: theme.colors.primary,
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
    },
    contentBody: {
      marginTop: 12,
      color: theme.colors.primary,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
    },
    contentContainer: {
      backgroundColor: theme.colors.background,
      paddingHorizontal: 24,
      marginBottom: 20,
      marginTop: -68,
    },
    dayNews: {
      backgroundColor: "rgba(246, 246, 246, 0.2)",
      alignItems: "center",
      borderRadius: 12,
      padding: 4,
      width: 100,
      marginTop: 32,
    },
    innerContainer: {
      backgroundColor: theme.colors.background,
      position: "absolute",
      width: SCREEN_WIDTH,
      top: 0,
      left: 0,
    },
    header: {
      marginTop: 16,
      marginStart: 10,
      zIndex: 1,
      elevation: 1,
    },
    more: {
      width: 300,
      color: "white", //theme.colors.primary,
      fontSize: 16,
      marginTop: 12,
    },
    news: {
      color: "white", //theme.colors.primary,
      fontWeight: "bold",
      fontSize: 24,
      width: 300,
      marginTop: 24,
    },
    propertiesContainer: {
      flexDirection: "row",
      marginTop: 20,
    },
    playTime: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
    },
    scrollContainer: {
      paddingTop: 400,
    },
    savedContainer: { marginStart: "auto", marginEnd: 12 },
    shareIconContainer: {
      marginStart: "auto",
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 20,
    },
    sliderCpntainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      height: 50,
      borderRadius: 25,
      position: "absolute",
      bottom: 20,
      right: 20,
    },
    textNews: {
      fontSize: 12,
      color: "white", //theme.colors.primary,
      fontWeight: "bold",
    },
    time: {
      marginStart: 8,
      color: theme.colors.primary,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
    },
    timeContainer: { marginStart: 24 },
    textToSpeechContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: 25,
      position: "absolute",
      bottom: 20,
      right: 20,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      padding: 12,
      elevation: 2,
    },
    viewsCount: {
      marginStart: 8,
      color: theme.colors.primary,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
    },
  });
}

const HEADER_EXPANDED_HEIGHT = 400;
const HEADER_COLLAPSED_HEIGHT = 50;

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const Article: React.FC<{ props: any; navigation: any }> = ({
  navigation,
  ...props
}) => {
  const [scrollY, setscrollY] = useState(new Animated.Value(0));
  const [headerHeight, setHeaderHeight] = useState<any>(0);
  const [borderRadius, setBorderRadius] = useState<any>(0);
  const [topHeight, setTopHeight] = useState<any>(0);
  const [headerTitleOpacity, setHeaderTitleOpacity] = useState<any>(0);
  const [heroTitleOpacity, setHeroTitleOpacity] = useState<any>(0);

  const [flag, setFlag] = useState<boolean>(false);
  const [body, Setbody] = useState<string>(
    "कमोडोर संजय पांडा कमांडिंग ऑफिसर, आईएनएस मंडोवी ने 20 अगस्त 22 की तड़के गोवा से पोर्ट लुइस, मॉरीशस के लिए एक नौकायन अभियान को हरी झंडी दिखाई। अभियान आईएनएसवी तारिणी पर छह (तीन महिला अधिकारियों सहित) के दल द्वारा चलाया जा रहा है। लगभग 2500 एनएम (लगभग 45000 किमी) की दूरी को एक तरफ से कवर करते हुए, चालक दल, 20 - 21 दिनों की अवधि में अत्यधिक मौसम और मानसून की खराब समुद्री परिस्थितियों का सामना करने की उम्मीद है। इन परिस्थितियों में नौकायन के अलावा चालक दल नाव रखरखाव, मशीनरी दिनचर्या और अपना भोजन तैयार करने का भी कार्य करेगा। एक बार जब वे भारतीय तटों को छोड़ देंगे तो मरग ननसटप हग। भरतय नसन क पस छह महसगरय भरतय नसन नकयन पत (आईएनएसव) ह, जस महदई, तरण, बलबल, हरयल, कदलपर और नलकठ उनक सच म। य नकए नयमत रप स नसनक करमय क एक छट दल क सथ अभयन सबध नकयन करत ह। समदर उडन क लए चलक दल क चयन परयपत समदर नकयन अनभव वल सवयसवक म स कय जत ह। समदर नकयन एक अतयत कठन सहसक खल ह। य समदर नकयन अभयन सहसक क भवन पद करन म मदद करत ह, जखम लन क कषमत क बढन क सथ-सथ नवगशन, सचर, इजन और जहज पर मशनर क तकनक सचलन, इनमरसट उपकरण क सचलन, रसद यजन आद सहत आवशयक नवक कशल क सममन करत ह। यह परयजन क भरतय नसन क कषमत क भ बढत ह। सगर परकरम और कप टउन स रय ड जनरय दड, आईओएनएस और बगल क खड क नकयन अभयन जस नकयन अभयन म भग लकर दनय भर म अपन समय उपसथत। तरण क 2017 म सभ महल अधकरय क दल क सथ गलब 'नवक सगर परकरम' क लए जन जत ह। वरतमन अभयन म, चयनत दल एक लग तटसथ ह जसम परतयक म तन परष और तन महल अधकर शमल ह। पत क भरतय नसन क सबस अनभव नवक कपटन वड महरश दवर सकप कय ज रह ह। चलक दल क सदसय म कमडर वकस शयरण, लफटनट कमडर पयल गपत, लफटनट कमडर कशल पडनकर, लफटनट कमडर दलन क और लफटनट कमडर रप ए शमल ह।"
  );
  const [article, setArticle] = useState<IArticle>({} as IArticle);
  const [loading, setLoading] = useState(true);
  const { readText, stopTTS } = useContext(TextToSpeech);

  useEffect(() => {
    setHeaderHeight(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: "clamp",
      })
    );
    setBorderRadius(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [20, 0],
        extrapolate: "clamp",
      })
    );

    setTopHeight(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, HEADER_COLLAPSED_HEIGHT - HEADER_EXPANDED_HEIGHT],
        extrapolate: "clamp",
      })
    );
    setHeaderTitleOpacity(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: "clamp",
      })
    );
    setHeroTitleOpacity(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: "clamp",
      })
    );
  }, [scrollY]);

  const { theme } = useContext(ThemeContext);

  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSBtn = function handleShowButton() {
    Animated.timing(slideAnim, {
      toValue: SCREEN_WIDTH - 34,
      duration: 400,
      useNativeDriver: false,
      easing: Easing.elastic(1),
    }).start();
  };
  const handleHBtn = function handleHideButton() {
    Animated.timing(slideAnim, {
      toValue: 50,
      duration: 400,
      useNativeDriver: false,
      easing: Easing.elastic(1),
    }).start();
  };

  const [isPressed, setIsPressed] = useState<boolean>(false);
  useEffect(() => {
    isPressed ? handleSBtn() : handleHBtn();
  }, [isPressed]);

  const { getArticle } = useContext(ArticleContext);

  //@ts-ignore
  const { id } = props.route.params;
  const { appLanguage } = useContext(LocaleContext);

  useEffect(() => {
    async function fetchArticle() {
      const res = await getArticle(id);
      setArticle(res.data);
      setLoading(false);
    }
    if (id) fetchArticle();
  }, [id]);

  LogBox.ignoreAllLogs();
  return (
    <MainLayout
      customStyles={getStyles(theme).container}
      disableDefaultPadding={true}
    >
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={theme.colors.primary} />
        </View>
      ) : (
        <>
          <Animated.View
            style={{
              ...getStyles(theme).innerContainer,
              height: headerHeight,
            }}
          >
            <Animated.View
              style={{
                ...getStyles(theme).header,
                opacity: headerTitleOpacity,
              }}
            >
              <BackArrowIcon
                color={theme.colors.primary}
                customOnPress={() => navigation.navigate("Home")}
              />
            </Animated.View>

            <Animated.View
              style={{
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                opacity: heroTitleOpacity,
                top: topHeight,
              }}
            >
              <Animated.Image
                source={require("../assets/ArticleBackground.png")}
                style={{
                  opacity: 0.6,
                  width: SCREEN_WIDTH,
                  height: HEADER_EXPANDED_HEIGHT,
                }}
              />
            </Animated.View>
            <Animated.View
              style={{
                position: "absolute",
                marginTop: 50,
                opacity: heroTitleOpacity,
                top: topHeight,
                marginHorizontal: 40,
              }}
            >
              <View style={getStyles(theme).iconContainer}>
                <BackArrowIcon
                  color="white"
                  customOnPress={() => navigation.navigate("Home")}
                />
                <View style={getStyles(theme).shareIconContainer}>
                  <ShareIcon color="white" />
                </View>
              </View>

              <View style={getStyles(theme).dayNews}>
                <Text style={getStyles(theme).textNews}>वित्त मत्रांलय</Text>
              </View>

              <Text
                numberOfLines={4}
                ellipsizeMode="tail"
                style={getStyles(theme).news}
              >
                {article.title}
              </Text>

              <Text style={getStyles(theme).more}>{article.title}</Text>
            </Animated.View>
          </Animated.View>

          <ScrollView
            style={{ marginTop: 50 }}
            contentContainerStyle={getStyles(theme).scrollContainer}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ])}
            scrollEventThrottle={16}
          >
            <Animated.View
              style={{
                ...getStyles(theme).contentContainer,
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
              }}
            >
              <View style={getStyles(theme).propertiesContainer}>
                <EyeIcon color={theme.colors.g1} />
                <Text style={getStyles(theme).viewsCount}>1.2k</Text>

                <ClockIcon
                  customStyle={getStyles(theme).timeContainer}
                  color={theme.colors.g1}
                />
                <Text style={getStyles(theme).time}>30 MAR 2022</Text>
                <View style={getStyles(theme).savedContainer}>
                  <SavedIcon opacity={0} color={theme.colors.primary} />
                </View>
              </View>
              <Text style={getStyles(theme).content}>{article.title}</Text>
              <Text style={getStyles(theme).contentBody}>
                {article.content[appLanguage] +
                  article.content[appLanguage] +
                  article.content[appLanguage]}
              </Text>
            </Animated.View>
          </ScrollView>
          <Animated.View
            style={{ ...getStyles(theme).sliderCpntainer, width: slideAnim }}
          >
            <View style={{ marginStart: 16 }}>
              <PlayIcon />
            </View>
            {isPressed && (
              <Slider
                minimumTrackTintColor={theme.colors.primary}
                style={{ width: SCREEN_WIDTH - 160 }}
                thumbTintColor={theme.colors.primary}
              />
            )}
            {isPressed && <Text style={getStyles(theme).playTime}>03:00</Text>}
          </Animated.View>
          <TouchableOpacity
            style={getStyles(theme).textToSpeechContainer}
            onPress={() => {
              isPressed ? setIsPressed(false) : setIsPressed(true);
              if (flag) {
                stopTTS();
                setFlag(false);
              } else {
                readText(article.content[appLanguage]);
                setFlag(true);
              }
            }}
          >
            <TTSIcon color={theme.colors.primary} />
          </TouchableOpacity>
        </>
      )}
    </MainLayout>
  );
};

export default Article;
