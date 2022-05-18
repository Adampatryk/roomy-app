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
  return testRooms[testRooms.length - 1].id + 1;
};

export const editRoom = (roomId, roomName) => {
  const roomIndex = testRooms.findIndex((room) => room.id == roomId);
  testRooms[roomIndex].name = roomName;
};

export const pushRoom = (room) => {
  testRooms.push(room);
};
