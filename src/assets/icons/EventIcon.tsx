import React from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const EventIcon: React.FC<{ color: string; customStyle?: any }> = ({
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
        // xmlns="http://www.w3.org/2000/Svg"
      >
        <Path
          d="M7.99976 2V5"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.9998 2V5"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.99976 13H14.9998"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.99976 17H11.9998"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.9998 3.5C19.3298 3.68 20.9998 4.95 20.9998 9.65V15.83C20.9998 19.95 19.9998 22.01 14.9998 22.01H8.99976C3.99976 22.01 2.99976 19.95 2.99976 15.83V9.65C2.99976 4.95 4.66976 3.69 7.99976 3.5H15.9998Z"
          stroke={color}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});
export default EventIcon;
