import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getPeople, getPersonById } from "../api/people";
import { getRoomById, getRooms } from "../api/rooms";
import AppSubtitle from "../components/AppSubtitle";
import AppTitle from "../components/AppTitle";
import { BackButton } from "../components/buttons";
import { ListItem } from "../components/lists";
import Screen from "../components/Screen";
import strings from "../config/strings";
import { allocation } from "../models";
import { getAllocations } from "../utility/allocate";

const allocToTitle = (alloc) => {
  const room = getRoomById(alloc[allocation.FIELD_ROOM]);
  const personId = alloc[allocation.FIELD_PERSON];
  const title = room.name + " - " + getPersonById(personId).name;
  return title;
};

const AllocationsScreen = () => {
  const [allocations, setAllocations] = useState([]);

  const setup = () => {
    const allocs = getAllocations(getRooms(), getPeople());
    setAllocations(allocs);
    //console.log("Allocs", allocs);
  };

  useEffect(() => setup(), []);

  const renderAllocation = (alloc) => (
    <ListItem key={alloc[allocation.FIELD_ROOM]} title={allocToTitle(alloc)} />
  );

  return (
    <Screen>
      <BackButton />
      <View>
        <AppTitle>{strings.ROOMS_ALLOCATED_TITLE}</AppTitle>
        <AppSubtitle>{strings.ROOMS_ALLOCATED_MESSAGE}</AppSubtitle>
        <FlatList
          data={allocations}
          renderItem={({ item }) => renderAllocation(item)}
          keyExtractor={(item) => item.value}
        />
      </View>
    </Screen>
  );
};

export default AllocationsScreen;
