import React from "react";
import AppTitle from "../components/AppTitle";
import { BackButton } from "../components/buttons";
import Screen from "../components/Screen";

const BattleScreen = () => {
  return (
    <Screen>
      <BackButton />
      <AppTitle>Battle!</AppTitle>
    </Screen>
  );
};

export default BattleScreen;
