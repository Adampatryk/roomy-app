import React from "react";
import { Text } from "react-native";
import { AppButton } from "./buttons";

const ConflictWinnerPicker = ({
  roomAllocations,
  conflictingRoom,
  people,
  onWinnerPicked,
}) => {
  if (!roomAllocations || !conflictingRoom) return <Text>No conflicts</Text>;

  console.log("CONFLICTWINNERPICKER roomAllocs: ", roomAllocations);
  console.log("CONFLICTWINNERPICKER conflictingRoom: ", conflictingRoom);

  return roomAllocations[conflictingRoom].slice(0, 2).map((personId, index) => (
    <AppButton onPress={() => onWinnerPicked(index)} key={index}>
      {people.find((person) => personId == person.id).name}
    </AppButton>
  ));
};

export default ConflictWinnerPicker;
