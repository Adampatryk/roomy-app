import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getPeople } from "../api/people";
import { getRooms } from "../api/rooms";
import AppSubtitle from "../components/AppSubtitle";
import AppTitle from "../components/AppTitle";
import { BackButton } from "../components/buttons";
import { ListItem } from "../components/lists";
import Screen from "../components/Screen";
import { getAllocations } from "../utility/allocate";

const AllocationsScreen = () => {
  const [allocations, setAllocations] = useState([]);

  const setup = () => {
    const allocs = getAllocations(getRooms(), getPeople());
    setAllocations(allocs);
    console.log("Allocs", allocs);
  };

  useEffect(() => setup(), []);

  const renderAllocation = (allocation) => (
    <ListItem title={allocation[0] + " - " + allocation[1]} />
  );

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
