import { useEffect, useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";
import { getFreeRoomId, getRooms, pushRoom } from "../api/rooms";
import AppTextInput from "../components/AppTextInput";
import AppTitle from "../components/AppTitle";
import { BackButton, NextButton } from "../components/buttons";
import Content from "../components/Content";

import InputList from "../components/InputList";
import { EditableListItem } from "../components/lists";

import Screen from "../components/Screen";
import colors from "../config/colors";
import room from "../models/room";
import routes from "../navigation/routes";

const RoomInputScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState();

  useEffect(() => setRooms(getRooms()), []);

  const getNewRoom = () => {
    return { id: getFreeRoomId(), name: roomName };
  };

  const askUserForNewRoom = () => {
    const newRoom = getNewRoom();
    const newRooms = [...rooms, newRoom];
    setRooms(newRooms);
    pushRoom(newRoom);
    resetRoomName();
  };

  const resetRoomName = () => {
    setRoomName("");
    Keyboard.dismiss();
  };

  const renderItem = (item) => (
    <EditableListItem title={item[room.FIELD_NAME]} />
  );

  return (
    <Screen>
      <Content>
        <BackButton />
        <AppTitle>Input rooms</AppTitle>
        <AppTextInput
          value={roomName}
          onValueChange={(newText) => setRoomName(newText)}
          placeholder="Room name..."
        />
        <InputList
          data={rooms}
          keyField={room.FIELD_ID}
          displayNameField={room.FIELD_NAME}
          onNewItemPressed={askUserForNewRoom}
        />
      </Content>
      <NextButton destination={routes.ROUTE_PEOPLE} />
    </Screen>
  );
};

export default RoomInputScreen;
