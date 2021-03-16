const graphql = require('graphql');

// Types
const UserType = require('./user_type');


const { GraphQLObjectType } = graphql;


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
