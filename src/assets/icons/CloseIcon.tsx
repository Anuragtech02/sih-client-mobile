import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const CloseIcon: React.FC<{
  color: string;
  customStyle?: any;
  customOnPress: any;
}> = ({ color, customStyle, customOnPress }) => {
  return (
    <TouchableOpacity
      style={customStyle}
      onPress={customOnPress}
      activeOpacity={0.5}
    >
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.16992 14.83L14.8299 9.17001"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.8299 14.83L9.16992 9.17001"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default CloseIcon;
