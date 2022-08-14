import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts/ThemeContext";

interface ICard {
  children: React.ReactNode;
  style?: any;
  onPress: () => void;
}

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.spacing.xs,
      padding: theme.spacing.sm,
    },
  });
}

const Card: React.FC<ICard> = ({ children, style, onPress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={{ ...getStyles(theme).container, ...style }}>
          {children}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
