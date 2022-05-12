import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const AppTitle = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: colors.PRIMARY,
  },
});

export default AppTitle;
