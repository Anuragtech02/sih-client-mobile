import React from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const ShareIcon: React.FC<{
  color?: string;
  customStyle?: any;
  width?: any;
}> = ({ color, customStyle, width = "24" }) => {
  return (
    <View style={customStyle}>
      <Svg
        // xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <Path
          d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path d="M15.5 6.5L8.5 10.5" stroke={color} stroke-width="1.5" />
        <Path d="M8.5 13.5L15.5 17.5" stroke={color} stroke-width="1.5" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ShareIcon;
