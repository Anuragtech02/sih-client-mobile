import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";

interface IButton {
  children: React.ReactNode;
  onPress?: () => void;
  icon?: React.ReactNode;
  customStyle?: any;
  position?: "left" | "right";
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  [x: string]: any;
}

function getVariantStyle(theme: ITheme, variant: string, target: string) {
  if (target === "container") {
    switch (variant) {
      case "primary": {
        return {
          backgroundColor: theme.colors.primary,
          borderWidth: 0,
          borderColor: "transparent",
        };
      }
      case "secondary": {
        return {
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: theme.colors.primary,
        };
      }
      case "tertiary": {
        return {};
      }
      default: {
        return {};
      }
    }
  } else if (target === "text") {
    switch (variant) {
      case "primary": {
        return {
          color: "white",
        };
      }
      case "secondary": {
        return {
          color: theme.colors.primary,
        };
      }
      case "tertiary": {
        return {
          color: theme.colors.primary,
        };
      }
      default:
        break;
    }
  }
}

function getStyles(
  theme: ITheme,
  variant: "primary" | "secondary" | "tertiary"
): any {
  return StyleSheet.create({
    container: {
      // width: "100%",
      borderRadius: 8,
      ...getVariantStyle(theme, variant, "container"),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    disabled: {
      backgroundColor: "grey",
    },
    innerContainer: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    text: {
      fontFamily: theme.fonts.body.fontFamily,
      ...getVariantStyle(theme, variant, "text"),
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
  customStyle = {},
  disabled = false,
  variant = "primary",
  ...remaining
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[getStyles(theme, variant).container, customStyle]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={{
          ...getStyles(theme, variant).innerContainer,
          ...(disabled ? getStyles(theme, variant).disabled : {}),
        }}
        {...remaining}
      >
        {position && position === "left" && IconComp}
        <Text style={getStyles(theme, variant).text}>{children}</Text>
        {position && position === "right" && IconComp}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
