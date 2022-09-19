import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Svg, { Path, Circle } from "react-native-svg";

const EditIcon: React.FC<{
  customOnPress?: any;
  customStyle?: any;
  width?: any;
}> = ({ customStyle, width = "24", customOnPress }) => {
  return (
    <View style={customStyle}>
      <TouchableOpacity activeOpacity={0.8} onPress={customOnPress}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //xmlns="http://www.w3.org/2000/svg"
        >
          <Circle
            cx="12"
            cy="12"
            r="11.75"
            fill="white"
            stroke="#E5E5E5"
            stroke-width="0.5"
          />
          <Path
            d="M12.577 7.05714L7.88556 12.0228C7.70842 12.2114 7.53699 12.5828 7.5027 12.84L7.29127 14.6914C7.21699 15.36 7.69699 15.8171 8.35985 15.7028L10.1998 15.3886C10.457 15.3429 10.817 15.1543 10.9941 14.96L15.6856 9.99428C16.497 9.13714 16.8627 8.15999 15.5998 6.96571C14.3427 5.78285 13.3884 6.19999 12.577 7.05714Z"
            stroke="#292D32"
            stroke-width="1.14286"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M11.7944 7.88571C12.0401 9.46285 13.3201 10.6686 14.9087 10.8286"
            stroke="#292D32"
            stroke-width="1.14286"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M6.71436 17.5714H17.0001"
            stroke="#292D32"
            stroke-width="1.14286"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default EditIcon;
