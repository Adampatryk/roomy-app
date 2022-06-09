import React, { useEffect, useState } from "react";
import { getRooms } from "../api/rooms";
import AppSubtitle from "./AppSubtitle";

const ConflictInfo = ({ conflictingRoom }) => {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    setRooms(getRooms());
  }, [conflictingRoom]);

  const room = rooms?.find((r) => r.id == conflictingRoom);

  return (
    <>
      {conflictingRoom ? (
        <AppSubtitle>Conflict in {room.name}</AppSubtitle>
      ) : (
        <AppSubtitle>No Conflicts</AppSubtitle>
      )}
    </>
  );
};

export default ConflictInfo;
