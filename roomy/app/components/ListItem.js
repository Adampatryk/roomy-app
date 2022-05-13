import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.PRIMARY,
    padding: 10,
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: colors.WHITE,
  },
});

export default ListItem;
