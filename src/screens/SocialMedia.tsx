import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import WebView from "react-native-webview";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
  });
}

function SocialMedia() {
  const { theme } = useContext(ThemeContext);
  let JS =
    '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';

  let source =
    JS +
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Conquering <a href="https://twitter.com/hashtag/Cancer?src=hash&amp;ref_src=twsrc%5Etfw">#Cancer</a> is possible.<br><br>Faith in life and a strong desire to live, right diagnosis and treatment heightens measures of defeating cancer<br><br>Hear it from the doctors🩺<br><br>in 12th National Science Film Festival of India&#39;s<br><br>short film &#39;Know Cancer&#39; <br><br>📽️<a href="https://t.co/KgCxg1xgrW">https://t.co/KgCxg1xgrW</a> <a href="https://t.co/IQIitrmRFN">pic.twitter.com/IQIitrmRFN</a></p>&mdash; PIB in Maharashtra 🇮🇳 (@PIBMumbai) <a href="https://twitter.com/PIBMumbai/status/1562751994976120832?ref_src=twsrc%5Etfw">August 25, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <WebView
        // originWhitelist={["*"]}
        source={{ html: source }}
        style={{ backgroundColor: "grey", minWidth: "100%", minHeight: "100%" }}
        javaScriptEnabled={true}
      ></WebView>
    </MainLayout>
  );
}
export default SocialMedia;
