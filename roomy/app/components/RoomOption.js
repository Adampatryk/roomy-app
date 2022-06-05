import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppSubtitle from "./AppSubtitle";

const RoomOption = ({ room, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <AppSubtitle fontSize={25}>{room.name}</AppSubtitle>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    marginVertical: 3,
    marginHorizontal: 20,
    borderColor: colors.SECONDARY,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default RoomOption;
