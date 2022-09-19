import React, { useContext, useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { ThemeContext } from "../utils/contexts";
import { ITheme } from "../utils/contexts/interfaces";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    inputField: {
      borderBottomWidth: 1,
      textAlign: "center",
      alignSelf: "center",
      width: 40,
    },
  });
}

const OTP: React.FC<{ onCodeFilled: Function; customStyles?: any }> = ({
  onCodeFilled,
  customStyles,
}) => {
  const pin1ref = useRef<any>();
  const pin2ref = useRef<any>();
  const pin3ref = useRef<any>();
  const pin4ref = useRef<any>();
  const pin5ref = useRef<any>();
  const pin6ref = useRef<any>();
  const [pin1, setPin1] = useState<string>("");
  const [pin2, setPin2] = useState<string>();
  const [pin3, setPin3] = useState<string>();
  const [pin4, setPin4] = useState<string>();
  const [pin5, setPin5] = useState<string>();
  const [pin6, setPin6] = useState<string>();

  const { theme } = useContext(ThemeContext);
  return (
    <View style={{ ...getStyles(theme).container, ...customStyles }}>
      <TextInput
        value={pin1}
        ref={pin1ref}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(pin) => {
          setPin1(pin);
          if (pin) {
            pin2ref.current.focus();
          }
        }}
        style={getStyles(theme).inputField}
      />
      <TextInput
        value={pin2}
        ref={pin2ref}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(pin) => {
          setPin2(pin);
          if (pin) {
            pin3ref.current.focus();
          }
        }}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace" && !pin2) {
            pin1ref.current.focus();
          }
        }}
        style={getStyles(theme).inputField}
      />
      <TextInput
        value={pin3}
        ref={pin3ref}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(pin) => {
          setPin3(pin);
          if (pin) {
            pin4ref.current.focus();
          }
        }}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace" && !pin3) {
            pin2ref.current.focus();
          }
        }}
        style={getStyles(theme).inputField}
      />
      <TextInput
        value={pin4}
        ref={pin4ref}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(pin) => {
          setPin4(pin);
          if (pin) {
            pin5ref.current.focus();
          }
        }}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace" && !pin4) {
            pin3ref.current.focus();
          }
        }}
        style={getStyles(theme).inputField}
      />
      <TextInput
        value={pin5}
        ref={pin5ref}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(pin) => {
          setPin5(pin);
          if (pin) {
            pin6ref.current.focus();
          }
        }}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace" && !pin5) {
            pin4ref.current.focus();
          }
        }}
        style={getStyles(theme).inputField}
      />
      <TextInput
        value={pin6}
        ref={pin6ref}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(pin) => {
          setPin6(pin);
          if (pin) {
            onCodeFilled(pin1 + pin2 + pin3 + pin4 + pin5 + pin);
          }
        }}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace" && !pin6) {
            pin5ref.current.focus();
          }
        }}
        style={getStyles(theme).inputField}
      />
    </View>
  );
};
export default OTP;
