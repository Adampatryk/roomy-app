import { StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

const AppTextInput = ({ value, onValueChange, placeholder }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onValueChange}
      placeholder={placeholder}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    color: colors.WHITE,
    backgroundColor: colors.LIGHT_GRAY,
    width: "60%",
    padding: 5,
  },
});

export default AppTextInput;
