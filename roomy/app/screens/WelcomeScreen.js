import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import AppTitle from "../components/AppTitle";
import Screen from "../components/Screen";

const WelcomeScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <AppTitle>Roomy</AppTitle>
        <Button
          title="Start"
          onPress={() => {
            alert("hello");
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
