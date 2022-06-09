import React from "react";
import { Text } from "react-native";

const Allocation = ({ roomId, peopleIds, rooms, people }) => {
  //If rooms or people haven't loaded yet dont run
  if (!rooms.length || !people.length) return <Text>No allocations</Text>;

  const roomName = rooms.find((r) => r.id == roomId).name;
  const peopleInRoom = peopleIds
    .map((personId) => people.find((p) => p.id === personId).name)
    .join(", ");

  return (
    <Text>
      {roomName} : {peopleInRoom}
    </Text>
  );
};

export default Allocation;
