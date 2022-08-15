import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/ThemeContext";

const Timer = (props: any) => {
  const { theme } = useContext(ThemeContext);

  const { initialMinute = 0, initialSeconds = 0, text } = props;

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <View>
      {minutes === 0 && seconds === 0 ? (
        <Text
          style={getStyles(theme).resend}
          onPress={() => {
            setSeconds(3);
          }}
        >
          {text}
        </Text>
      ) : (
        <Text style={getStyles(theme).timer}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      )}
    </View>
  );
};

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    resend: {
      textDecorationLine: "underline",
      color: theme.colors.primary,
      fontFamily: "Poppins-Medium",
      fontSize: theme.fonts.body.fontSize,
    },
    timer: {
      color: theme.colors.primary,
      fontFamily: "Poppins-Medium",
      fontSize: theme.fonts.body.fontSize,
    },
  });
}

export default Timer;
