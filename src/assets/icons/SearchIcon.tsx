import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

const SearchIcon: React.FC<{ customStyles?: any }> = ({ customStyles }) => {
  return (
    <View style={customStyles}>
      <TouchableOpacity activeOpacity={0.8}>
        <Svg
          width="48"
          height="48"
          viewBox="0 0 40 40"
          fill="none"
          //xmlns="http://www.w3.org/2000/svg"
        >
          <Rect width="40" height="40" rx="5" fill="#292D32" />
          <Path
            d="M19.6663 26.0002C23.1641 26.0002 25.9997 23.1646 25.9997 19.6668C25.9997 16.169 23.1641 13.3335 19.6663 13.3335C16.1685 13.3335 13.333 16.169 13.333 19.6668C13.333 23.1646 16.1685 26.0002 19.6663 26.0002Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M26.6663 26.6668L25.333 25.3335"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};
export default SearchIcon;
