import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as peopleApi from "../api/people";
import * as roomApi from "../api/rooms";
import {
  mapPreferencesToRoomNames,
  mapPreferencesToRooms,
} from "../utility/mapping";
import AppSubtitle from "./AppSubtitle";

const PreferencesList = ({ preferences }) => {
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
      <AppSubtitle>Preferences Left</AppSubtitle>
      {Object.keys(preferences).map((personId, index) => (
        <Text key={index}>
          {peopleApi.getPersonById(personId).name}:{" "}
          {mapPreferencesToRoomNames(preferences[personId]).join(", ")}
        </Text>
      ))}
    </>
  );
};

export default PreferencesList;
