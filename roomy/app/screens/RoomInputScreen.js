import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import AppTitle from "../components/AppTitle";
import { BackButton, NextButton } from "../components/buttons";

import InputList from "../components/InputList";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import colors from "../config/colors";
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
      <View style={styles.container}>
        <BackButton />
        <AppTitle>Input rooms</AppTitle>
        <InputList
          data={rooms}
          keyField={"id"}
          displayNameField={"name"}
          onNewItemPressed={askUserForNewRoom}
        />
      </View>
      <NextButton destination={routes.ROUTE_PEOPLE} />
    </Screen>
  );
};

export default RoomInputScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});