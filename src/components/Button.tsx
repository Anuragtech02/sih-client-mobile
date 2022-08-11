import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

interface IButton {
  children: React.ReactNode;
  onPress: () => void;
  icon: React.ReactNode;
  position: "left" | "right";
}

const styles = StyleSheet.create({
  container: {},
});

const Button: React.FC<IButton> = ({
  children,
  onPress,
  icon: IconComp,
  position,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {position === "left" && IconComp}
        <Text>{children}</Text>
        {position === "right" && IconComp}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
