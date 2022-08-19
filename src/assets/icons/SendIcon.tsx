import React from "react";
import { StyleSheet, View } from "react-native";

import Svg, { Path } from "react-native-svg";

const SendIcon: React.FC<{ color: string; customStyle?: any }> = ({
  color,
  customStyle,
}) => {
  return (
    <View style={customStyle}>
      <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M8.6665 7.3333L14.1332 1.86664"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.6668 4.53331V1.33331H11.4668"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.3335 1.33331H6.00016C2.66683 1.33331 1.3335 2.66665 1.3335 5.99998V9.99998C1.3335 13.3333 2.66683 14.6666 6.00016 14.6666H10.0002C13.3335 14.6666 14.6668 13.3333 14.6668 9.99998V8.66665"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SendIcon;
