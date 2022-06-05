import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AppTitle from "../components/AppTitle";
import { AppButton, BackButton } from "../components/buttons";
import Screen from "../components/Screen";
import strings from "../config/strings";
import routes from "../navigation/routes";

const AllocationModeScreen = () => {
  const navigator = useNavigation();
  return (
    <Screen>
      <BackButton />

      <View style={styles.container}>
        <AppTitle>{strings.CHOOSE_MODE_MESSAGE}</AppTitle>
        <AppButton onPress={() => navigator.navigate(routes.ROUTE_ALLOCATIONS)}>
          {strings.RANDOM_MODE_NAME}
        </AppButton>
        <AppButton onPress={() => navigator.navigate(routes.ROUTE_BATTLE)}>
          {strings.ASSISTED_MODE_NAME}
        </AppButton>
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
