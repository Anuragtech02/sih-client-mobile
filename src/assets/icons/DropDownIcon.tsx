import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const DropDownIcon: React.FC<{
  customStyle?: any;
  customOnPress: any;
}> = ({ customStyle, customOnPress }) => {
  return (
    <TouchableOpacity
      style={customStyle}
      onPress={customOnPress}
      activeOpacity={0.5}
    >
      <Svg
        //xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <Path
          fill="#212121"
          d="M4.14645,5.64645 C4.34171,5.45118 4.65829,5.45118 4.85355,5.64645 L7.9999975,8.79289 L11.1464,5.64645 C11.3417,5.45118 11.6583,5.45118 11.8536,5.64645 C12.0488,5.84171 12.0488,6.15829 11.8536,6.35355 L8.35355,9.85355 C8.15829,10.0488 7.84171,10.0488 7.64645,9.85355 L4.14645,6.35355 C3.95118,6.15829 3.95118,5.84171 4.14645,5.64645 Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default DropDownIcon;
