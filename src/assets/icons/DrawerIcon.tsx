import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { ThemeContext } from "../../utils/contexts";

const DrawerIcon: React.FC<{ customOnPress?: any }> = ({ customOnPress }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={customOnPress} activeOpacity={0.5}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M3 7H21"
          stroke={theme.colors.primary}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <Path
          d="M3 12H21"
          stroke={theme.colors.primary}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <Path
          d="M3 17H21"
          stroke={theme.colors.primary}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};
export default DrawerIcon;
