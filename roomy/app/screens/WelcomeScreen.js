import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import AppTitle from "../components/AppTitle";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";
import strings from "../config/strings";

const WelcomeScreen = () => {
  const navigator = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <AppTitle>{strings.APP_TITLE}</AppTitle>
        <Button
          title={strings.START_BUTTON_TEXT}
          onPress={() => {
            navigator.navigate(routes.ROUTE_ROOMS);
          }}
        />
        <StatusBar style="auto" />
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
