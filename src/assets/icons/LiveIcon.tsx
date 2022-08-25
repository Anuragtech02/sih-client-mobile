import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ITheme } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

import Svg, { Path } from "react-native-svg";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    bar: {
      backgroundColor: "green",
      position: "absolute",
      bottom: 0,
      width: 36,
      height: 5,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
  });
}

const LiveIcon: React.FC<{ color: any; opacity: any }> = ({
  color,
  opacity,
}) => {
  const { theme } = useContext(ThemeContext);
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
          d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
          fill={color}
          stroke={
            color === theme.colors.regionalColor
              ? theme.colors.regionalColor
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2.52 7.11H21.48"
          stroke={
            color === theme.colors.regionalColor
              ? theme.colors.absoluteWhite
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.52 2.11V6.97"
          stroke={
            color === theme.colors.regionalColor
              ? theme.colors.absoluteWhite
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.48 2.11V6.52"
          stroke={
            color === theme.colors.regionalColor
              ? theme.colors.absoluteWhite
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.75 14.45V13.25C9.75 11.71 10.84 11.08 12.17 11.85L13.21 12.45L14.25 13.05C15.58 13.82 15.58 15.08 14.25 15.85L13.21 16.45L12.17 17.05C10.84 17.82 9.75 17.19 9.75 15.65V14.45V14.45Z"
          fill={color}
          stroke={
            color === theme.colors.regionalColor
              ? theme.colors.absoluteWhite
              : theme.colors.g1
          }
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <View style={{ ...getStyles(theme).bar, opacity: opacity }} />
    </>
  );
};

export default LiveIcon;
