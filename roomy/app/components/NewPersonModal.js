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
import {
  mapPreferencesToRooms,
  mapRoomsToPreferences,
} from "../utility/mapping";

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
  const [roomOptions, setRoomOptions] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const resetForm = () => {
    setName("");
    setSelectedRooms([]);
  };

  useEffect(() => {
    //console.log(selectedPerson);
    if (selectedPerson) {
      setupFormWithPerson(selectedPerson);
    } else {
      resetForm();
    }
  }, [selectedPerson, visible]);

  useEffect(() => {
    const rooms = roomApi.getRooms();
    setRoomOptions(rooms);
  }, []);

  const setupFormWithPerson = (person) => {
    setName(person.name);
    setSelectedRooms(mapPreferencesToRooms(person.preferences));
  };

  const getCurrentPersonFromForm = () => {
    return {
      name: name,
      preferences: mapRoomsToPreferences(selectedRooms),
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
    resetForm();
    setModalVisible(false);
  };

  const areRoomsSelected = selectedRooms.length == roomOptions.length;

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
          <RoomPreferencePicker
            roomOptions={roomOptions}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
          />
          {selectedPerson ? (
            <View style={styles.buttonContainer}>
              <AppButton onPress={() => onDeleteButton()}>Delete</AppButton>
              <AppButton
                disabled={!areRoomsSelected}
                onPress={() => onSaveButton()}
              >
                Save
              </AppButton>
            </View>
          ) : (
            <AppButton
              disabled={!areRoomsSelected}
              onPress={() => submitNewPerson()}
            >
              Add
            </AppButton>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default NewPersonModal;
