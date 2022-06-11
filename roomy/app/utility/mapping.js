import { getRooms } from "../api/rooms";

// @parameter preferences - list of ordered ids of rooms
export const mapPreferencesToRooms = (preferences) => {
  const rooms = getRooms();
  const orderedRooms = [];

  preferences.forEach((roomId) => {
    orderedRooms.push(rooms.find((room) => room.id == roomId));
  });

  return orderedRooms;
};

export const mapPreferencesToRoomNames = (preferences) => {
  return mapPreferencesToRooms(preferences).map((room) => room.name);
};

export const mapRoomsToPreferences = (rooms) => {
  return rooms.map((room) => room.id);
};
