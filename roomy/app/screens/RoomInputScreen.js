import { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { getFreeRoomId, getRooms, pushRoom } from "../api/rooms";
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
  };

  const renderItem = (item) => (
    <EditableListItem title={item[room.FIELD_NAME]} />
  );

  return (
    <Screen>
      <Content>
        <BackButton />
        <AppTitle>Input rooms</AppTitle>
        <TextInput
          value={roomName}
          onChangeText={(newText) => setRoomName(newText)}
          style={styles.input}
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

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    color: colors.WHITE,
    backgroundColor: colors.LIGHT_GRAY,
    width: "60%",
    padding: 5,
  },
});

export default RoomInputScreen;
