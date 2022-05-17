import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getPeople } from "../api/people";
import { getRoomById, getRooms } from "../api/rooms";
import AppSubtitle from "../components/AppSubtitle";
import AppTitle from "../components/AppTitle";
import { BackButton } from "../components/buttons";
import { ListItem } from "../components/lists";
import Screen from "../components/Screen";
import { allocation } from "../models";
import { getAllocations } from "../utility/allocate";

const allocToTitle = (alloc) => {
  const room = getRoomById(alloc[allocation.FIELD_ROOM]);
  const person = alloc[allocation.FIELD_PERSON];
  const title = room.name + " - " + person;
  return title;
};

const AllocationsScreen = () => {
  const [allocations, setAllocations] = useState([]);

  const setup = () => {
    const allocs = getAllocations(getRooms(), getPeople());
    setAllocations(allocs);
    console.log("Allocs", allocs);
  };

  useEffect(() => setup(), []);

  const renderAllocation = (alloc) => <ListItem title={allocToTitle(alloc)} />;

  return (
    <Screen>
      <BackButton />
      <View>
        <AppTitle>Woohoo!</AppTitle>
        <AppSubtitle>Rooms have been allocated</AppSubtitle>
        <FlatList
          data={allocations}
          renderItem={({ item }) => renderAllocation(item)}
        />
      </View>
    </Screen>
  );
};

export default AllocationsScreen;
