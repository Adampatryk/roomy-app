import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ overrideOnPress }) => {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Back"
        onPress={overrideOnPress ? overrideOnPress : () => navigator.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: "flex-start" },
});
export default BackButton;
