const _rooms = [];
const _prefs = {};

const setup = (rooms, people) => {
  rooms.forEach((room) => {
    _rooms.push([]);
  });
  people.forEach((person) => {
    _prefs[person.name] = person.preferences;
  });
};

const resetRooms = () => {
  for (let roomIndex = 0; roomIndex < _rooms.length; roomIndex++) {
    _rooms[roomIndex] = [];
  }
};

const allocate = () => {
  _prefs.forEach((person) => {
    let personTopPref = _prefs[person][0];
    _rooms[personTopPref - 1].push(person);
  });
};

const getConflictingRoom = () => {
  for (let roomIndex = 0; roomIndex < _rooms.length; roomIndex++) {
    if (_rooms[roomIndex].length > 1) {
      return roomIndex;
    }
  }
  return false;
};

export const getAllocations = (rooms, people) => {
  setup(rooms, people);
  console.log(_rooms, _prefs);

  //   const conflictingRoom = getConflictingRoom();

  //   while (conflictingRoom) {
  //     resolveConflicts(conflictingRoom);
  //     resetRooms();
  //     allocate();
  //     conflictingRoom = getConflictingRoom();
  //   }
  const allocations = [];
  let i = 0;
  rooms.forEach((room) => {
    console.log("Room", room);
    console.log("person", people[i]);
    allocations.push([room.name, people[i++].name]);
  });
  console.log("Allocations", allocations);
  return allocations;
};
