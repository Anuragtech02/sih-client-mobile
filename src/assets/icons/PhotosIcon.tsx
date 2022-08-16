import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ITheme } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

import Svg, { Path } from "react-native-svg";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    bar: {
      backgroundColor: theme.colors.primary,
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
          d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86V19.95C3.32 21.75 4.61 22.51 6.19 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
          stroke={
            color === theme.colors.primary ? theme.colors.primary : "#989898"
          }
          fill={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <View style={{ ...getStyles(theme).bar, opacity: opacity }} />
    </>
  );
};

export default PhotosIcon;
