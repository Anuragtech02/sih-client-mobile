import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/ThemeContext";

interface IButton {
  children: React.ReactNode;
  onPress?: () => void;
  icon?: React.ReactNode;
  position?: "left" | "right";
  variant?: "primary" | "secondary";
}

function getStyles(theme: ITheme, variant: "primary" | "secondary"): any {
  return StyleSheet.create({
    container: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 8,
      backgroundColor:
        variant === "primary" ? theme.colors.primary : "transparent",
      borderWidth: variant === "primary" ? 0 : 2,
      borderColor: variant === "primary" ? "transparent" : theme.colors.primary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: variant === "primary" ? "white" : theme.colors.primary,
      fontFamily: theme.fonts.body.fontFamily,
      fontSize: theme.fonts.body.fontSize,
      fontWeight: "500",
    },
  });
}

const Button: React.FC<IButton> = ({
  children,
  onPress,
  icon: IconComp,
  position,
  variant = "primary",
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={getStyles(theme, variant).container}>
      <TouchableOpacity onPress={onPress}>
        {position && position === "left" && IconComp}
        <Text style={getStyles(theme, variant).text}>{children}</Text>
        {position && position === "right" && IconComp}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
