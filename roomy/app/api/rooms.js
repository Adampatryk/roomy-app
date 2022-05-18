const testRooms = [
  {
    id: 1,
    name: "Room 1",
  },
  {
    id: 2,
    name: "Room 2",
  },
];

export const getRoomById = (id) => {
  return testRooms.find((room) => room.id == id);
};

export const getRooms = () => {
  return testRooms;
};

export const getFreeRoomId = () => {
  if (testRooms.length == 0) return 1;
  return testRooms[testRooms.length - 1].id + 1;
};

export const deleteRoom = (roomId) => {
  const roomIndex = testRooms.findIndex((room) => room.id == roomId);
  testRooms.splice(roomIndex, 1);
};

export const editRoomName = (roomId, roomName) => {
  const roomIndex = testRooms.findIndex((room) => room.id == roomId);
  testRooms[roomIndex].name = roomName;
};

export const pushRoom = (room) => {
  testRooms.push(room);
};
