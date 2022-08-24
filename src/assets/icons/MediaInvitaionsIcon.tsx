import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const MediaInvitaionsIcon: React.FC<{
  color: string;
  width?: number;
}> = ({ color, width = 24 }) => {
  return (
    <Svg
      width="24"
      height="29"
      viewBox="0 0 14 10"
      fill="none"
      //xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0.5L0.5 0H13.5L14 0.5V9.5L13.5 10H0.5L0 9.5V0.5ZM1 1.535V9H13V1.536L7.31 5.9H6.7L1 1.535ZM12.03 1H1.97L7 4.869L12.03 1Z"
        fill={color}
      />
    </Svg>
  );
};

export default MediaInvitaionsIcon;
