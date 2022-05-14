import { Text, View } from "react-native";
import { BackButton, NextButton } from "../components/buttons";
import AppTitle from "../components/AppTitle";

import Screen from "../components/Screen";
import Content from "../components/Content";
import InputList from "../components/InputList";
import { useState } from "react";
import person from "../models/person";

const testPeople = [
  {
    id: 1,
    name: "Adam",
    preferences: [1, 2, 3],
  },
];

const PeopleInputScreen = () => {
  const [people, setPeople] = useState(testPeople);
  return (
    <Screen>
      <Content>
        <BackButton />
        <AppTitle>Input people</AppTitle>
        <InputList
          data={people}
          keyField={person.FIELD_ID}
          displayNameField={person.FIELD_NAME}
          subtitleField={person.FIELD_PREFERENCES}
          subtitleFunction={(subtitle) => `Preferences: ${subtitle.join(", ")}`}
        />
      </Content>
      <NextButton />
    </Screen>
  );
};

export default PeopleInputScreen;
