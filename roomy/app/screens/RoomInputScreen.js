import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppTitle from "../components/AppTitle";
import ListItem from "../components/ListItem";
import PlusButton from "../components/PlusButton";
import Screen from "../components/Screen";

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
        <AppTitle>Input rooms</AppTitle>
        {rooms.map((room) => (
          <ListItem title={room.name} />
        ))}
        <PlusButton onPressed={() => askUserForNewRoom()} />
      </View>
    </Screen>
  );
};

export default RoomInputScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
