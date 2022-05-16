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

export const getRooms = () => {
  return testRooms;
};

export const getFreeRoomId = () => {
  return testRooms[testRooms.length - 1].id + 1;
};

export const pushRoom = (room) => {
  testRooms.push(room);
};
