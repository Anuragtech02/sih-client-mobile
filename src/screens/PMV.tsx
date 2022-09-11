import React from "react";
import WebView from "react-native-webview";

const PMV: React.FC<{ route: any }> = ({ route }) => {
  const newLInk = route.params.link;
  return <WebView source={{ uri: newLInk }}></WebView>;
};

export default PMV;
