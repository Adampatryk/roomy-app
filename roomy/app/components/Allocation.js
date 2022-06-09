import React from "react";
import { Text } from "react-native";

const Allocation = ({ roomId, peopleIds, rooms, people }) => {
  //If rooms or people haven't loaded yet dont run
  console.log(people);
  console.log("peopleIds", peopleIds);
  let roomName, peopleInRoom;
  try {
    roomName = rooms.find((r) => r.id == roomId).name;
    peopleInRoom = peopleIds
      .map((personId) => people.find((p) => p.id == personId).name)
      .join(", ");
  } catch (error) {
    console.log(error);
    return <Text>No allocations</Text>;
  }

  return (
    <Text>
      {roomName} : {peopleInRoom}
    </Text>
  );
};

export default Allocation;
