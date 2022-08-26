import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ITheme } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

import Svg, { Path } from "react-native-svg";
import { regionalThemes } from "../../utils/theme";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    bar: {
      position: "absolute",
      bottom: 0,
      width: 36,
      height: 5,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
  });
}

const PhotosIcon: React.FC<{ color: any; opacity: any }> = ({
  color,
  opacity,
}) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          fill={color}
          stroke={
            color === regionalThemes[currentRegion].color
              ? regionalThemes[currentRegion].color
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
          fill={color}
          stroke={
            color === regionalThemes[currentRegion].color
              ? theme.colors.absoluteWhite
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9"
          fill={color}
          stroke={
            color === regionalThemes[currentRegion].color
              ? theme.colors.absoluteWhite
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <View
        style={{
          ...getStyles(theme).bar,
          opacity: opacity,
          backgroundColor: regionalThemes[currentRegion].color,
        }}
      />
    </>
  );
};

export default PhotosIcon;
