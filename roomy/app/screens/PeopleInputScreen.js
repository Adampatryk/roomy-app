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
import * as peopleApi from "../api/people";
import routes from "../navigation/routes";
import strings from "../config/strings";
import * as roomsApi from "../api/rooms";
import { ListItem } from "../components/lists";

const PeopleInputScreen = () => {
  const [people, setPeople] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    setPeople(peopleApi.getPeople());
  }, []);

  const showEditPersonModal = (personId) => {
    setSelectedPerson(peopleApi.getPersonById(personId));
    setModalVisible(true);
  };

  const showNewPersonModal = () => {
    setSelectedPerson(null);
    setModalVisible(true);
  };

  const renderItem = (person) => (
    <ListItem
      key={person.id}
      title={person.name}
      subtitle={person.preferences.join(", ")}
      onPress={() => showEditPersonModal(person.id)}
    />
  );

  return (
    <Screen>
      <Content>
        <BackButton />
        <AppTitle>{strings.PEOPLE_INPUT_TITLE}</AppTitle>
        <InputList
          data={people}
          onNewItemPressed={showNewPersonModal}
          canAddNewItem={people.length < roomsApi.getRooms().length}
          renderItem={(item) => renderItem(item)}
        />
        <NewPersonModal
          visible={modalVisible}
          setModalVisible={setModalVisible}
          onSubmitNewPerson={peopleApi.pushPerson}
          selectedPerson={selectedPerson}
          onDelete={(person) => peopleApi.deletePersonById(person.id)}
          onSave={(person) => peopleApi.updatePerson(person)}
        />
      </Content>
      <NextButton
        disabled={people.length !== roomsApi.getRooms().length}
        destination={routes.ROUTE_ALLOCATION_MODE}
      />
    </Screen>
  );
};

export default PeopleInputScreen;
