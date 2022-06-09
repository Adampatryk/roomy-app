import React from "react";
import AppSubtitle from "./AppSubtitle";

const ConflictInfo = ({ conflictingRoom }) => {
  return (
    <>
      {conflictingRoom ? (
        <AppSubtitle>Conflict in room: {conflictingRoom}</AppSubtitle>
      ) : (
        <AppSubtitle>No Conflicts</AppSubtitle>
      )}
    </>
  );
};

export default ConflictInfo;
