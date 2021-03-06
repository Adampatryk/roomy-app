import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as peopleApi from "../api/people";
import * as roomApi from "../api/rooms";
import Allocation from "./Allocation";
import AppSubtitle from "./AppSubtitle";

const AllocationList = ({ allocations }) => {
  const [rooms, setRooms] = useState([]);
  const [people, setPeople] = useState([]);

  //Refresh rooms and people
  useEffect(() => {
    setRooms(roomApi.getRooms());
    setPeople(peopleApi.getPeople());
    //console.log("ALLOCS", allocations);
  }, []);

  return (
    <>
      <AppSubtitle>Current Allocations</AppSubtitle>
      {Object.keys(allocations).map((roomId, index) => (
        <Allocation
          key={index}
          roomId={roomId}
          peopleIds={allocations[roomId]}
          rooms={rooms}
          people={people}
        />
      ))}
    </>
  );
};

export default AllocationList;
