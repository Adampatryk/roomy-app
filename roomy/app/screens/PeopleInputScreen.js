import { Text } from "react-native";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
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
