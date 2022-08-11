import { TouchableOpacity, StyleSheet, View } from "react-native";

interface IInputField {
  onPress: () => void;
  icon: React.ReactNode;
  position: "left" | "right";
}

const styles = StyleSheet.create({
  container: {},
});

const InputField: React.FC<IInputField> = ({
  onPress,
  icon: IconComp,
  position,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}></View>
    </TouchableOpacity>
  );
};

export default InputField;
