import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AppTitle from "../components/AppTitle";
import { AppButton, BackButton } from "../components/buttons";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

const AllocationModeScreen = () => {
  const navigator = useNavigation();
  return (
    <Screen>
      <BackButton />

      <View style={styles.container}>
        <AppTitle>Choose mode:</AppTitle>
        <AppButton onPress={() => navigator.navigate(routes.ROUTE_ALLOCATIONS)}>
          Random
        </AppButton>
        <AppButton disabled>Assisted</AppButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default AllocationModeScreen;
