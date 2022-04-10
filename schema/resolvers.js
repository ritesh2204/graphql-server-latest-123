const { UsersList, MovieList } = require("./../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => UsersList,
    user: (parent, args) => _.find(UsersList, { id: Number(args.id) }),
    movies: () => MovieList,
    movie: (parent, args) => _.find(MovieList, { name: args.name }),
  },
  User: {
    favouriteMovies: (parent) => {
      return _.filter(MovieList, { isInTheaters: true });
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UsersList[UsersList.length - 1].id;
      user.id = lastId + 1;
      UsersList.push(user);
      console.log("This is trhe user >>>>", user);
      return user;
    },
    updateUsername: (parent, args) => {
      const user = _.find(UsersList, { id: Number(args.input.id) });
      user.userName = args.input.newUserName;
      return user;
    },
    deleteUser: (parent, args) => {
      const user = _.find(UsersList, { id: Number(args.id) });
      _.remove(UsersList, { id: Number(args.id) });
      return user;
    },
  },
};

module.exports = { resolvers };
