const { UsersList } = require("./../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => UsersList,
    user: (parent, args) => _.find(UsersList, { id: Number(args.id) }),
  },
};

module.exports = { resolvers };
