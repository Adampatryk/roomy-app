import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.PRIMARY,
    padding: 10,
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: colors.WHITE,
  },
  subtitle: {
    fontSize: 15,
    color: colors.WHITE,
  },
});
