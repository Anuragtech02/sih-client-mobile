import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

function DrawerIcon() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      //xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3 7H21"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M3 12H21"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M3 17H21"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
}
export default DrawerIcon;
