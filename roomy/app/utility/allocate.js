export const setupRooms = (rooms) => {
  const setupRooms = {};

  rooms.forEach((room) => {
    setupRooms[room.id] = [];
  });

  return setupRooms;
};

export const setupPrefs = (people) => {
  const setupPrefs = {};

  people.forEach((person) => {
    setupPrefs[person.id] = person.preferences;
  });

  return setupPrefs;
};

export const resetRooms = (rooms) => {
  const newRooms = {};
  for (const [room, allocs] of Object.entries(rooms)) {
    newRooms[room] = [];
  }
  return newRooms;
};

export const allocate = (rooms, prefs) => {
  const tempRooms = resetRooms(rooms);

  for (const [person, personPrefs] of Object.entries(prefs)) {
    let personTopPref = personPrefs[0];
    console.log(
      "allocate(), person: ",
      person,
      "personTopPref:",
      personTopPref
    );
    tempRooms[personTopPref].push(person);
  }

  return tempRooms;
};

export const getConflictingRoom = (rooms) => {
  for (const [room, prefs] of Object.entries(rooms)) {
    if (prefs.length > 1) return room;
  }
  return false;
};

export const resolveConflicts = (
  conflictingRoomIndex,
  rooms,
  prefs,
  winnerIndex = 0
) => {
  const tempPrefs = { ...prefs };

  const conflictingPeople = rooms[conflictingRoomIndex];
  console.log("Conflicting people", conflictingPeople);

  const winner = conflictingPeople[winnerIndex];

  conflictingPeople.slice(0, 2).forEach((person) => {
    if (person != winner) {
      let roomLost = tempPrefs[person].shift();
      console.log(person, "loses room", roomLost);
    }
  });

  console.log("RESOLVE CONFLICTS PREFS: ", tempPrefs);

  return tempPrefs;
};

export const convertToAllocations = (rooms) => {
  const allocations = [];
  for (const [room, people] of Object.entries(rooms)) {
    allocations.push({ room: room, person: rooms[room][0] });
  }
  return allocations;
};

export const printCurrentPrefs = (rooms, prefs) => {
  console.log("Rooms:", rooms);
  console.log("Prefs:", prefs);
};

export const getAllocations = (rooms, people) => {
  let _rooms = {};
  let _prefs = {};

  _rooms = setupRooms(rooms);
  _prefs = setupPrefs(people);
  console.log("Post setup...");
  printCurrentPrefs(_rooms, _prefs);
  _rooms = allocate(_rooms, _prefs);

  let conflictingRoom = getConflictingRoom(_rooms);
  console.log("Conflicting room", conflictingRoom);

  while (conflictingRoom) {
    printCurrentPrefs(_rooms, _prefs);

    _prefs = resolveConflicts(conflictingRoom, _rooms, _prefs);
    _rooms = allocate(_rooms, _prefs);

    conflictingRoom = getConflictingRoom(_rooms);
  }

  const allocations = convertToAllocations(_rooms);
  return allocations;
};
