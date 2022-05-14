import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListItem = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
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
  title: {
    fontSize: 20,
    color: colors.WHITE,
  },
  subtitle: {
    fontSize: 15,
    color: colors.WHITE,
  },
});

export default ListItem;
