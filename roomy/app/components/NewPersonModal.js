import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { getFreePersonId, pushPerson } from "../api/people";
import AppTextInput from "./AppTextInput";
import AppTitle from "./AppTitle";
import { AppButton, BackButton, NextButton, PlusButton } from "./buttons";
import { getRooms } from "../api/rooms";
import { ListItem } from "./lists";

const NewPersonModal = ({ visible, setModalVisible }) => {
  const [name, setName] = useState();
  const [rooms, setRooms] = useState();
  const [prefs, setPreferenceInput] = useState();

  useEffect(() => setRooms(getRooms()), []);

  const parsePreferences = (stringPrefs) => {
    const arrayPrefs = stringPrefs.split(",");
    return arrayPrefs;
  };

  const getNewPerson = () => {
    return {
      id: getFreePersonId(),
      name: name,
      preferences: parsePreferences(prefs),
    };
  };

  const submitNewPerson = () => {
    const newPerson = getNewPerson();
    pushPerson(newPerson);
    setModalVisible(false);
  };

  const renderRoom = (room) => <ListItem title={room.name} />;

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <BackButton overrideOnPress={() => setModalVisible(false)} />
        <AppTitle>New Person</AppTitle>
        <AppTextInput
          value={name}
          onValueChange={(value) => setName(value)}
          placeholder="Name"
        />
        <AppTextInput
          value={prefs}
          onValueChange={(value) => setPreferenceInput(value)}
          placeholder={"Input room IDs in order of preference"}
        />
        <AppButton onPress={() => submitNewPerson()}>Add Person</AppButton>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default NewPersonModal;
