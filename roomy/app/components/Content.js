import { StyleSheet, View } from "react-native";

const Content = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
export default Content;
