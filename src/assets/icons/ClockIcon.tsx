import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeContext } from "../../utils/contexts";
import Svg, { Path } from "react-native-svg";

const ClockIcon: React.FC<{
  color?: string;
  customStyle?: any;
  width?: number;
}> = ({ color, customStyle, width = 24 }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={customStyle}>
      <Svg
        width={width}
        height={width}
        viewBox="0 0 20 20"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M18.3333 10.0003C18.3333 14.6003 14.6 18.3337 9.99996 18.3337C5.39996 18.3337 1.66663 14.6003 1.66663 10.0003C1.66663 5.40033 5.39996 1.66699 9.99996 1.66699C14.6 1.66699 18.3333 5.40033 18.3333 10.0003Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.0918 12.6495L10.5084 11.1078C10.0584 10.8411 9.69177 10.1995 9.69177 9.67448V6.25781"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default ClockIcon;
