const UsersList = [
  {
    id: 1,
    name: "Ritesh",
    userName: "ritesh123",
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
    userName: "Roshan456",
    email: "rohan@gmail.com",
    age: 25,
    nationality: "BRAZIL",
    friends: null,
  },
  {
    id: 3,
    name: "Vipul",
    userName: "Vipul789",
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

const MovieList = [
  {
    id: 1,
    name: "Avengers",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Superman",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: false,
  },
];

module.exports = { UsersList, MovieList };
