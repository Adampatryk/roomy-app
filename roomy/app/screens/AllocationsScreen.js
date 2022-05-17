import { View } from "react-native";
import AppSubtitle from "../components/AppSubtitle";
import AppTitle from "../components/AppTitle";
import { BackButton } from "../components/buttons";
import Screen from "../components/Screen";

const AllocationsScreen = () => {
  return (
    <Screen>
      <BackButton />
      <View>
        <AppTitle>Woohoo!</AppTitle>
        <AppSubtitle>Rooms have been allocated</AppSubtitle>
      </View>
    </Screen>
  );
};

export default AllocationsScreen;
