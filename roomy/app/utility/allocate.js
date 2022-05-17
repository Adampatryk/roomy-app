const _rooms = {};
const _prefs = {};

const setup = (rooms, people) => {
  rooms.forEach((room) => {
    _rooms[room.id] = [];
  });
  people.forEach((person) => {
    _prefs[person.name] = person.preferences;
  });
};

const resetRooms = () => {
  for (const [room, allocs] of Object.entries(_rooms)) {
    _rooms[room] = [];
  }
};

const allocate = () => {
  for (const [person, prefs] of Object.entries(_prefs)) {
    let personTopPref = prefs[0];
    console.log(
      "allocate(), person: ",
      person,
      "personTopPref:",
      personTopPref
    );
    _rooms[personTopPref].push(person);
  }
};

const getConflictingRoom = () => {
  for (const [room, prefs] of Object.entries(_rooms)) {
    if (prefs.length > 1) return room;
  }
  return false;
};

const resolveConflictsRandom = (conflictingRoomIndex) => {
  const conflictingPeople = _rooms[conflictingRoomIndex];
  console.log("Conflicting people", conflictingPeople);

  const winner = conflictingPeople[0];

  conflictingPeople.forEach((person) => {
    if (person != winner) {
      let roomLost = _prefs[person].shift();
      console.log(person, "loses room", roomLost);
    }
  });
};

const convertToAllocations = () => {
  const allocations = [];
  for (const [room, people] of Object.entries(_rooms)) {
    allocations.push({ room: room, person: _rooms[room][0] });
  }
  return allocations;
};

const printCurrentPrefs = () => {
  console.log("Rooms:", _rooms);
  console.log("Prefs:", _prefs);
};

export const getAllocations = (rooms, people) => {
  setup(rooms, people);
  console.log("Post setup...");
  printCurrentPrefs();
  allocate();

  let conflictingRoom = getConflictingRoom();
  console.log("Conflicting room", conflictingRoom);

  while (conflictingRoom) {
    printCurrentPrefs();
    resolveConflictsRandom(conflictingRoom);
    resetRooms();
    allocate();
    conflictingRoom = getConflictingRoom();
  }

  const allocations = convertToAllocations();
  return allocations;
};
