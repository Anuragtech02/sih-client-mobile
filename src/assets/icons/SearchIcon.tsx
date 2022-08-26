import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { ThemeContext } from "../../utils/contexts";
import { regionalThemes } from "../../utils/theme";

const SearchIcon: React.FC<{
  customStyles?: any;
  width?: number | string;
  height?: number | string;
  color?: string;
}> = ({ customStyles, width = 48, color, height = 48 }) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <View
      style={{
        ...customStyles,
        borderRadius: 5,
        backgroundColor: "red",
        overflow: "hidden",
      }}
    >
      <TouchableOpacity activeOpacity={0.8}>
        <Svg
          width={width}
          height={height}
          viewBox="0 0 40 40"
          fill="none"
          //xmlns="http://www.w3.org/2000/svg"
        >
          <Rect
            width={width}
            height={height}
            fill={regionalThemes[currentRegion].color}
          />
          <Path
            d="M19.6666 26C23.1644 26 25.9999 23.1645 25.9999 19.6667C25.9999 16.1689 23.1644 13.3333 19.6666 13.3333C16.1688 13.3333 13.3333 16.1689 13.3333 19.6667C13.3333 23.1645 16.1688 26 19.6666 26Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M26.6666 26.6667L25.3333 25.3333"
            stroke={color}
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
