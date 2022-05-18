import { useEffect, useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";
import * as roomApi from "../api/rooms";
import AppTextInput from "../components/AppTextInput";
import AppTitle from "../components/AppTitle";
import { BackButton, NextButton } from "../components/buttons";
import Content from "../components/Content";

import InputList from "../components/InputList";
import { EditableListItem } from "../components/lists";

import Screen from "../components/Screen";
import colors from "../config/colors";
import strings from "../config/strings";
import room from "../models/room";
import routes from "../navigation/routes";

const RoomInputScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  useEffect(() => setRooms(roomApi.getRooms()), []);

  const getNewRoom = (roomName) => {
    return { id: roomApi.getFreeRoomId(), name: roomName };
  };

  const askUserForNewRoom = () => {
    const name = roomName.trim();

    if (name != "") {
      const newRoom = getNewRoom(name);
      const newRooms = [...rooms, newRoom];
      setRooms(newRooms);
      roomApi.pushRoom(newRoom);
      resetRoomName();
    } else {
      alert(strings.ROOM_NAME_NOT_EMPTY);
    }
  };

  const resetRoomName = () => {
    setRoomName("");
    Keyboard.dismiss();
  };

  const deleteRoom = (id) => {
    roomApi.deleteRoom(id);
    const tempRooms = rooms.filter((room) => room.id != id);
    setRooms(tempRooms);
  };

  const renderItem = (item) => (
    <EditableListItem
      key={item[room.FIELD_ID]}
      title={item[room.FIELD_NAME]}
      saveTitle={(roomName) =>
        roomApi.editRoomName(item[room.FIELD_ID], roomName)
      }
      onDelete={() => deleteRoom(item[room.FIELD_ID])}
    />
  );

  return (
    <Screen>
      <Content>
        <BackButton />
        <AppTitle>{strings.ROOM_INPUT_TITLE}</AppTitle>
        <AppTextInput
          value={roomName}
          onValueChange={(newText) => setRoomName(newText)}
          placeholder={strings.ROOM_NAME_INPUT_PLACEHOLDER}
        />
        <InputList
          data={rooms}
          keyField={room.FIELD_ID}
          displayNameField={room.FIELD_NAME}
          onNewItemPressed={askUserForNewRoom}
          renderItem={(item) => renderItem(item)}
        />
      </Content>
      <NextButton destination={routes.ROUTE_PEOPLE} />
    </Screen>
  );
};

export default RoomInputScreen;
