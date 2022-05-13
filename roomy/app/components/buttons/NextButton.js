import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";

import { useNavigation } from "@react-navigation/native";

const NextButton = ({ destination }) => {
  const navigator = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <AppButton
        containerStyle={styles.button}
        onPress={() => navigator.navigate(destination)}
      >
        Next
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
