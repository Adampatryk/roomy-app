import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import strings from "../../config/strings";

const BackButton = ({ overrideOnPress }) => {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title={strings.BACK_BUTTON_TEXT}
        onPress={overrideOnPress ? overrideOnPress : () => navigator.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: "flex-start" },
});
export default BackButton;
