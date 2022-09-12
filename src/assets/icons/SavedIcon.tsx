import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ITheme } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

import Svg, { Path } from "react-native-svg";
import { regionalThemes } from "../../utils/theme";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    bar: {
      backgroundColor: theme.colors.regionalColor,
      position: "absolute",
      bottom: 0,
      width: 36,
      height: 5,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
  });
}

const SavedIcon: React.FC<{
  color?: any;
  opacity?: any;
  colorFill?: any;
  touchableOpacity?: number;
  width?: any;
  customOnPress?: any;
}> = ({
  color,
  opacity,
  colorFill,
  touchableOpacity = 1,
  customOnPress,
  width = "24",
}) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  return (
    <>
      <Svg
        width={width}
        height="24"
        viewBox="-3 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0 20H16.4706V17.6471H0M16.4706 7.05882H11.7647V0H4.70588V7.05882H0L8.23529 15.2941L16.4706 7.05882Z"
          fill={
            color === regionalThemes[currentRegion].color
              ? regionalThemes[currentRegion].color
              : theme.colors.white
          }
          stroke={
            colorFill === regionalThemes[currentRegion].color
              ? regionalThemes[currentRegion].color
              : theme.colors.g1
          }
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

export default SavedIcon;
