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
    '<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/COVID19?src=hash&amp;ref_src=twsrc%5Etfw">#COVID19</a> UPDATE<br><br>💠31,60,292 doses administered in last 24 hours<br><br>💠India&#39;s Active caseload currently stands at 90,707<br><br>💠Recovery Rate currently at 98.61%<br><br>Read here: <a href="https://t.co/yH7XoJdSpV">https://t.co/yH7XoJdSpV</a> <a href="https://twitter.com/hashtag/IndiaFightsCorona?src=hash&amp;ref_src=twsrc%5Etfw">#IndiaFightsCorona</a> <a href="https://t.co/eefluFR7g7">pic.twitter.com/eefluFR7g7</a></p>&mdash; PIB India (@PIB_India) <a href="https://twitter.com/PIB_India/status/1563025606086135809?ref_src=twsrc%5Etfw">August 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <WebView source={{ html: source }} javaScriptEnabled={true}></WebView>
    </MainLayout>
  );
}
export default SocialMedia;
