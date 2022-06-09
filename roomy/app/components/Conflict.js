import React from "react";
import AppSubtitle from "./AppSubtitle";
import ConflictInfo from "./ConflictInfo";
import ConflictWinnerPicker from "./ConflictWinnerPicker";

const Conflict = ({
  conflictingRoom,
  people,
  roomAllocations,
  onWinnerPicked,
}) => {
  return (
    <>
      <ConflictInfo conflictingRoom={conflictingRoom} />
      {conflictingRoom && (
        <>
          <AppSubtitle>Who wins?</AppSubtitle>
          <ConflictWinnerPicker
            people={people}
            conflictingRoom={conflictingRoom}
            roomAllocations={roomAllocations}
            onWinnerPicked={(winnerIndex) => onWinnerPicked(winnerIndex)}
          />
        </>
      )}
    </>
  );
};

export default Conflict;
