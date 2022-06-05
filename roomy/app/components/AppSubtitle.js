import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const AppSubtitle = ({ children, fontSize = 30 }) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: fontSize,
      color: colors.SECONDARY,
    },
  });

  return <Text style={styles.text}>{children}</Text>;
};

export default AppSubtitle;
