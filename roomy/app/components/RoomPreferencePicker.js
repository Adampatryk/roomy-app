import React from "react";
import { FlatList, TouchableHighlight, View } from "react-native";
import AppSubtitle from "./AppSubtitle";

const RoomPreferencePicker = ({ roomOptions, setRoomPrefs }) => {
  return (
    <FlatList
      data={roomOptions}
      renderItem={({ item }) => (
        <TouchableHighlight>
          <View>
            <AppSubtitle>{item.name}</AppSubtitle>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

export default RoomPreferencePicker;
