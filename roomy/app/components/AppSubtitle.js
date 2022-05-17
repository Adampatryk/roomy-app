import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const AppSubtitle = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: colors.SECONDARY,
  },
});

export default AppSubtitle;
