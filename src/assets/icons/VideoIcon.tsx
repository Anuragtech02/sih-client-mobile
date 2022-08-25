import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { ITheme } from "../../utils/contexts/interfaces";
import { ThemeContext } from "../../utils/contexts";

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

const VideoIcon: React.FC<{
  color: string;
  fillColor?: any;
  opacity?: any;
  newColor?: any;
}> = ({ color, fillColor, opacity = 0, newColor }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        //xmlns="http://www.w3.org/2000/Svg"
      >
        <Path
          d="M12.5298 22.1217H6.20976C3.04976 22.1217 1.99976 19.8467 1.99976 17.5609V8.43919C1.99976 5.01586 3.04976 3.87836 6.20976 3.87836H12.5298C15.6898 3.87836 16.7398 5.01586 16.7398 8.43919V17.5609C16.7398 20.9842 15.6798 22.1217 12.5298 22.1217Z"
          stroke={color}
          fill={fillColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.5197 18.525L16.7397 16.4125V9.57669L19.5197 7.46419C20.8797 6.43502 21.9997 7.06335 21.9997 8.87252V17.1275C21.9997 18.9367 20.8797 19.565 19.5197 18.525Z"
          stroke={color}
          fill={fillColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.4998 11.9167C12.3282 11.9167 12.9998 11.1891 12.9998 10.2917C12.9998 9.39422 12.3282 8.66669 11.4998 8.66669C10.6713 8.66669 9.99976 9.39422 9.99976 10.2917C9.99976 11.1891 10.6713 11.9167 11.4998 11.9167Z"
          stroke={newColor}
          fill="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <View style={{ ...getStyles(theme).bar, opacity: opacity }} />
    </>
  );
};

const styles = StyleSheet.create({});
export default VideoIcon;
