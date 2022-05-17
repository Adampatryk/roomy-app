const testPeople = [
  {
    id: 1,
    name: "Adam",
    preferences: [1, 2, 3],
  },
  {
    id: 2,
    name: "Riddhi",
    preferences: [2, 3, 1],
  },
];

export const getPeople = () => {
  return testPeople;
};

export const getFreePersonId = () => {
  return testPeople[testPeople.length - 1].id + 1;
};

export const pushPerson = (person) => {
  testPeople.push(person);
};
