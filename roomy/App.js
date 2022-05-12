import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AppTitle from "./app/components/AppTitle";
import colors from "./app/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <AppTitle>Roomy</AppTitle>
      <Button
        title="Hello"
        onPress={() => {
          alert("hello");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
