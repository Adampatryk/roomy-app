import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";

import { useNavigation } from "@react-navigation/native";
import strings from "../../config/strings";

const NextButton = ({ destination, disabled = false }) => {
  const navigator = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <AppButton
        containerStyle={styles.button}
        onPress={() => navigator.navigate(destination)}
        disabled={disabled}
      >
        {strings.NEXT_BUTTON_TEXT}
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
  },
});
export default NextButton;
