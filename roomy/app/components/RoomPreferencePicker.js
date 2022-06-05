import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppSubtitle from "./AppSubtitle";
import RoomOption from "./RoomOption";

const RoomPreferencePicker = ({
  roomOptions,
  selectedRooms,
  setSelectedRooms,
}) => {
  const renderRoom = (room) => (
    <RoomOption room={room} onPress={() => toggleRoom(room)} />
  );

  const toggleRoom = (room) => {
    if (selectedRooms.includes(room)) {
      setSelectedRooms(selectedRooms.filter((r) => r.id != room.id));
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  return (
    <View style={styles.roomSelectionsContainer}>
      <AppSubtitle>Room Preferences</AppSubtitle>
      <FlatList
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
        data={selectedRooms}
        renderItem={({ item }) => renderRoom(item)}
      />
      <AppSubtitle>Pick your rooms</AppSubtitle>
      <FlatList
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
        data={roomOptions.filter((room) => !selectedRooms.includes(room))}
        renderItem={({ item }) => renderRoom(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    height: 100,
    flexGrow: 1,
  },
  roomSelectionsContainer: {
    width: "100%",
    flex: 1,
  },
});

export default RoomPreferencePicker;
