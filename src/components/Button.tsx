import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/ThemeContext";

interface IButton {
  children: React.ReactNode;
  onPress?: () => void;
  icon?: React.ReactNode;
  position?: "left" | "right";
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      backgroundColor: theme.colors.primary,
    },
  });
}

const Button: React.FC<IButton> = ({
  children,
  onPress,
  icon: IconComp,
  position,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={getStyles(theme)}>
        {/* {position && position === "left" && IconComp} */}
        <Text>{children}</Text>
        {/* {position && position === "right" && IconComp} */}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
