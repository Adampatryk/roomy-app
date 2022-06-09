import React, { useEffect, useState } from "react";
import * as peopleApi from "../api/people";
import * as roomApi from "../api/rooms";
import Allocation from "./Allocation";

const AllocationList = ({ allocations }) => {
  const [rooms, setRooms] = useState([]);
  const [people, setPeople] = useState([]);

  //Refresh rooms and people
  useEffect(() => {
    setRooms(roomApi.getRooms());
    setPeople(peopleApi.getPeople());
  }, []);

  return Object.keys(allocations).map((roomId, index) => (
    <Allocation
      key={index}
      roomId={roomId}
      peopleIds={allocations[roomId]}
      rooms={rooms}
      people={people}
    />
  ));
};

export default AllocationList;
