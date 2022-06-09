import React from "react";
import AllocationList from "../components/AllocationList";
import AppTitle from "../components/AppTitle";
import { BackButton } from "../components/buttons";
import Screen from "../components/Screen";

const dummyAllocations = {
  1: [1, 2],
  2: [],
};

const BattleScreen = () => {
  return (
    <Screen>
      <BackButton />
      <AppTitle>Battle!</AppTitle>
      <AllocationList allocations={dummyAllocations} />
    </Screen>
  );
};

export default BattleScreen;
