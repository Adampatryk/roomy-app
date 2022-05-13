import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ children, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...containerStyle }}
    >
      <Text style={{ ...styles.text, ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    paddingHorizontal: 23,
    paddingVertical: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    color: colors.WHITE,
  },
});

export default AppButton;
