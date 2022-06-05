const testPeople = [
  {
    id: 1,
    name: "Adam",
    preferences: [],
  },
  {
    id: 2,
    name: "Riddhi",
    preferences: [],
  },
];

const findPersonIndex = (id) => {
  return testPeople.findIndex((person) => person.id === id);
};

export const getPeople = () => {
  return testPeople;
};

export const getPersonById = (id) => {
  return testPeople.find((person) => person.id === id);
};

const getFreePersonId = () => {
  if (testPeople.length === 0) return 1;
  return testPeople[testPeople.length - 1].id + 1;
};

export const pushPerson = (person) => {
  person.id = getFreePersonId();
  testPeople.push(person);
};

export const updatePerson = (person) => {
  const personIndex = findPersonIndex(person.id);
  testPeople[personIndex].name = person.name;
  testPeople[personIndex].preferences = person.preferences;
};

export const deletePersonById = (id) => {
  const personIndex = findPersonIndex(id);
  testPeople.splice(personIndex, 1);
};
