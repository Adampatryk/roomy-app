import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import AppTitle from "../components/AppTitle";
import { BackButton, NextButton } from "../components/buttons";
import Content from "../components/Content";

import InputList from "../components/InputList";

import Screen from "../components/Screen";
import room from "../models/room";
import routes from "../navigation/routes";

const testRooms = [
  {
    id: 1,
    name: "Room 1",
  },
  {
    id: 2,
    name: "Room 2",
  },
];

const getNewRoom = () => {
  return { id: 3, name: "Test" };
};

const RoomInputScreen = () => {
  const [rooms, setRooms] = useState(testRooms);

  const askUserForNewRoom = () => {
    const newRooms = [...rooms, getNewRoom()];
    setRooms(newRooms);
  };
  return (
    <Screen>
      <Content>
        <BackButton />
        <AppTitle>Input rooms</AppTitle>
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
