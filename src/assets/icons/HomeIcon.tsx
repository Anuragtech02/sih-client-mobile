import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ITheme } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

import Svg, { Path } from "react-native-svg";
import { regionalThemes } from "../../utils/theme";

function getStyles(theme: ITheme): any {
  console.log({ color: theme.colors.regionalColor });
  return StyleSheet.create({
    // bar: opacity => ({
    //     backgroundColor: colors.black,
    //     position: 'absolute',
    //     bottom: 0,
    //     width: 36,
    //     height: 5,
    //     opacity: opacity,
    //     borderRadius: 2,
    //   }),
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

const HomeIcon: React.FC<{ color: any; opacity: any }> = ({
  color,
  opacity,
}) => {
  const { theme, currentRegion } = useContext(ThemeContext);
  console.log(currentRegion);
  return (
    <>
      <Svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        //xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M13.75 19.315V15.065C13.75 14.0704 13.3549 13.1166 12.6517 12.4134C11.9484 11.7101 10.9946 11.315 10 11.315C9.00544 11.315 8.05161 11.7101 7.34835 12.4134C6.64509 13.1166 6.25 14.0704 6.25 15.065V19.315H2C1.66848 19.315 1.35054 19.1833 1.11612 18.9489C0.881696 18.7145 0.75 18.3965 0.75 18.065V7.197C0.749998 6.98113 0.805894 6.76896 0.912246 6.58111C1.0186 6.39328 1.17178 6.23618 1.35687 6.12512C1.35687 6.12512 1.35687 6.12512 1.35688 6.12512L9.35687 1.32512L8.971 0.682L9.35687 1.32512C9.55115 1.20855 9.77344 1.14698 10 1.14698C10.2266 1.14698 10.4489 1.20855 10.6431 1.32512L11.029 0.682L10.6431 1.32512L18.6431 6.12512C18.8282 6.23618 18.9814 6.39328 19.0878 6.58111C19.1941 6.76895 19.25 6.98113 19.25 7.19699V18.065C19.25 18.3965 19.1183 18.7145 18.8839 18.9489C18.6495 19.1833 18.3315 19.315 18 19.315H13.75Z"
          fill={color}
          stroke={
            color === regionalThemes[currentRegion].color
              ? regionalThemes[currentRegion].color
              : theme.colors.g1
          }
          stroke-width="1.5"
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

export default HomeIcon;
