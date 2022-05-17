import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { BackButton, NextButton } from "../components/buttons";
import AppTitle from "../components/AppTitle";

import Screen from "../components/Screen";
import Content from "../components/Content";
import InputList from "../components/InputList";
import { useEffect, useState } from "react";
import person from "../models/person";
import AppTextInput from "../components/AppTextInput";
import NewPersonModal from "../components/NewPersonModal";
import { getPeople } from "../api/people";

const PeopleInputScreen = () => {
  const [people, setPeople] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => setPeople(getPeople()), []);

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
          onNewItemPressed={() => setModalVisible(true)}
        />
        <NewPersonModal
          visible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Content>
      <NextButton />
    </Screen>
  );
};

export default PeopleInputScreen;
