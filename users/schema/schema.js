// Libraries
const grapql = require('graphql');

// Services
const CompanyService = require('../services/company');
const UserService = require('../services/user');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = grapql;


const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return CompanyService.getUsers(parentValue.id)
                    .then(response => response.data);
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString},
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                return CompanyService.getById(args.id)
                    .then(response => response.data);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return UserService
                    .then(response => response.data);
            }
        },
        company: {
            type: CompanyType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return CompanyService.getById(args.id)
                    .then(response => response.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});