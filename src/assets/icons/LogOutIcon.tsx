import React from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const LogOutIcon: React.FC<{ color: string; customStyle?: any }> = ({
  color,
  customStyle,
}) => {
  return (
    <View style={customStyle}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M11.9998 2.625V12.375M18.3748 4.875C18.3748 4.875 21.3748 6.822 21.3748 12C21.3748 14.4864 20.387 16.871 18.6289 18.6291C16.8707 20.3873 14.4862 21.375 11.9998 21.375C9.51335 21.375 7.12878 20.3873 5.37063 18.6291C3.61248 16.871 2.62476 14.4864 2.62476 12C2.62476 6.822 5.62476 4.875 5.62476 4.875"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});
export default LogOutIcon;
