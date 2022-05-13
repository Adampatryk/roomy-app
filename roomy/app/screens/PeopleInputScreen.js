import { Text } from "react-native";
import { BackButton, NextButton } from "../components/buttons";

import Screen from "../components/Screen";

const PeopleInputScreen = () => {
  return (
    <Screen>
      <BackButton />
      <Text>Hello</Text>
      <NextButton />
    </Screen>
  );
};

export default PeopleInputScreen;
