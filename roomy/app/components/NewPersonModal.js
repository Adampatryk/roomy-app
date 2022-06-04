import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as peopleApi from "../api/people";
import * as roomApi from "../api/rooms";
import AppTextInput from "./AppTextInput";
import AppTitle from "./AppTitle";
import AppSubtitle from "./AppSubtitle";
import { AppButton, BackButton } from "./buttons";
import strings from "../config/strings";
import RoomPreferencePicker from "./RoomPreferencePicker";
import Screen from "./Screen";

const NewPersonModal = ({
  visible,
  setModalVisible,
  onSubmitNewPerson,
  onDelete,
  onSave,
  selectedPerson,
}) => {
  //const [rooms, setRooms] = useState();
  const [name, setName] = useState("");
  const [prefs, setPreferenceInput] = useState("");
  const [roomOptions, setRoomOptions] = useState([]);
  const [roomPrefs, setRoomPrefs] = useState([]);

  useEffect(() => {
    //console.log(selectedPerson);
    if (selectedPerson) {
      setupFormWithPerson(selectedPerson);
    }
  }, [selectedPerson, visible]);

  useEffect(() => {
    const rooms = roomApi.getRooms();
    console.log(rooms);
    setRoomOptions(rooms);
  }, []);

  const setupFormWithPerson = (person) => {
    setName(person.name);
    setPreferenceInput(person.preferences.join(","));
  };

  const parsePreferences = (stringPrefs) => {
    const arrayPrefs = stringPrefs.split(",");
    return arrayPrefs;
  };

  const getCurrentPersonFromForm = () => {
    return {
      name: name,
      preferences: parsePreferences(prefs),
    };
  };

  const submitNewPerson = () => {
    const newPerson = getCurrentPersonFromForm();
    onSubmitNewPerson(newPerson);
    closeModal();
  };

  const onDeleteButton = () => {
    onDelete(selectedPerson);
    closeModal();
  };

  const onSaveButton = () => {
    const currentPerson = getCurrentPersonFromForm();
    selectedPerson.name = currentPerson.name;
    selectedPerson.preferences = currentPerson.preferences;
    onSave(selectedPerson);
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
      <Screen>
        <View style={styles.modalContainer}>
          <BackButton overrideOnPress={() => closeModal()} />
          {selectedPerson ? (
            <AppTitle>Edit {selectedPerson.name}</AppTitle>
          ) : (
            <AppTitle>New Person</AppTitle>
          )}
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
          <RoomPreferencePicker roomOptions={roomOptions} />
          {selectedPerson ? (
            <>
              <AppButton onPress={() => onDeleteButton()}>Delete</AppButton>
              <AppButton onPress={() => onSaveButton()}>Save</AppButton>
            </>
          ) : (
            <AppButton onPress={() => submitNewPerson()}>Add</AppButton>
          )}
        </View>
      </Screen>
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
