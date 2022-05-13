import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";

const PlusButton = ({ onPressed }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressed}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5,
  },
  text: {
    fontSize: 30,
    color: colors.WHITE,
  },
});
