const UsersList = [
  {
    id: 1,
    name: "Ritesh",
    email: "ritesh@gmail.com",
    age: 25,
    nationality: "AMERICA",
    friends: [
      {
        id: 2,
        name: "Rohan",
        email: "rohan@gmail.com",
        age: 25,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 2,
    name: "Rohan",
    email: "rohan@gmail.com",
    age: 25,
    nationality: "BRAZIL",
    friends: null,
  },
  {
    id: 3,
    name: "Vipul",
    email: "vipul@gmail.com",
    age: 25,
    nationality: "INDIA",
    friends: [
      {
        id: 1,
        name: "Ritesh",
        email: "ritesh@gmail.com",
        age: 25,
        nationality: "AMERICA",
      },
    ],
  },
];

module.exports = { UsersList };
