import React from "react";
import { StyleSheet } from "react-native";

import Svg, { Path } from "react-native-svg";

function BackArrow() {
  return (
    <>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M9.57 5.92999L3.5 12L9.57 18.07"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M20.4999 12H3.66992"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
}

const styles = StyleSheet.create({});
export default BackArrow;
