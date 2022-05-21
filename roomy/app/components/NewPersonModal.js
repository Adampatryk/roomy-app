import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { getFreePersonId, pushPerson } from "../api/people";
import AppTextInput from "./AppTextInput";
import AppTitle from "./AppTitle";
import { AppButton, BackButton } from "./buttons";
import strings from "../config/strings";

const NewPersonModal = ({ visible, setModalVisible }) => {
  //const [rooms, setRooms] = useState();
  const [name, setName] = useState();
  const [prefs, setPreferenceInput] = useState();

  //useEffect(() => setRooms(getRooms()), []);

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
    closeModal();
  };

  const closeModal = () => {
    setName("");
    setPreferenceInput("");
    setModalVisible(false);
  };

  //const renderRoom = (room) => <ListItem title={room.name} />;

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => closeModal()}
    >
      <View style={styles.modalContainer}>
        <BackButton overrideOnPress={() => closeModal()} />
        <AppTitle>New Person</AppTitle>
        <AppTextInput
          value={name}
          onValueChange={(value) => setName(value)}
          placeholder={strings.NEW_PERSON_NAME_PLACEHOLDER}
        />
        <AppTextInput
          value={prefs}
          onValueChange={(value) => setPreferenceInput(value)}
          placeholder={strings.NEW_PERSON_PREFS_PLACEHOLDER}
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
