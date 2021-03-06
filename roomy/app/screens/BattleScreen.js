import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as peopleApi from "../api/people";
import * as roomApi from "../api/rooms";
import AllocationList from "../components/AllocationList";
import AppSubtitle from "../components/AppSubtitle";
import AppTitle from "../components/AppTitle";
import { AppButton, BackButton } from "../components/buttons";
import Conflict from "../components/Conflict";
import ConflictInfo from "../components/ConflictInfo";
import ConflictWinnerPicker from "../components/ConflictWinnerPicker";
import PreferencesList from "../components/PreferencesList";
import Screen from "../components/Screen";
import {
  allocate,
  getConflictingRoom,
  resolveConflicts,
  setupPrefs,
  setupRooms,
} from "../utility/allocate";

const dummyAllocations = {
  1: [1, 2],
  2: [],
};

const BattleScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [people, setPeople] = useState([]);
  const [currentRoomAllocations, setRoomAllocations] = useState({});
  const [currentPreferences, setPreferences] = useState({});
  const [conflictingRoom, setConflictingRoom] = useState();

  useEffect(() => {
    setRooms(roomApi.getRooms());
    setPeople(peopleApi.getPeople());
  }, []);

  useEffect(() => {
    const prefs = setupPrefs(people);
    setPreferences(prefs);
    setRoomAllocations(allocate(setupRooms(rooms), prefs));
  }, [rooms, people]);

  useEffect(() => {
    setConflictingRoom(getConflictingRoom(currentRoomAllocations));
    console.log("CONFLICT", getConflictingRoom(currentRoomAllocations));
  }, [currentRoomAllocations]);

  const onWinnerPicked = (winnerIndex) => {
    const newPreferences = resolveConflicts(
      conflictingRoom,
      currentRoomAllocations,
      currentPreferences,
      winnerIndex
    );
    setPreferences(newPreferences);
    setRoomAllocations(allocate(currentRoomAllocations, newPreferences));
  };

  return (
    <Screen>
      <BackButton />
      <AppTitle>Battle!</AppTitle>
      <PreferencesList preferences={currentPreferences} />
      <AllocationList allocations={currentRoomAllocations} />
      <Conflict
        people={people}
        conflictingRoom={conflictingRoom}
        roomAllocations={currentRoomAllocations}
        onWinnerPicked={(winnerIndex) => onWinnerPicked(winnerIndex)}
      />
    </Screen>
  );
};

export default BattleScreen;
