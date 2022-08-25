import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Svg, { Path } from "react-native-svg";

const BackArrowIcon: React.FC<{
  customStyles?: any;
  customOnPress?: any;
  color?: string;
}> = ({ customOnPress, customStyles, color }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={customOnPress}
      style={customStyles}
    >
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M9.57 5.92999L3.5 12L9.57 18.07"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="100"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20.4999 12H3.66992"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default BackArrowIcon;
