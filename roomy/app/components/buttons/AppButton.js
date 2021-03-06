import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

const AppButton = ({
  children,
  onPress,
  containerStyle,
  textStyle,
  disabled = false,
}) => {
  let style = { ...styles.container, ...containerStyle };
  if (disabled) style = { ...style, ...styles.disabled };

  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
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
    margin: 5,
  },
  text: {
    fontSize: 18,
    color: colors.WHITE,
  },
  disabled: {
    backgroundColor: colors.LIGHT_GRAY,
  },
});

export default AppButton;
