const graphql = require('graphql');

// Types
const UserType = require('./types/user_type');

// Services
const AuthService = require('../services/auth');



const {
    GraphQLObjectType,
    GraphQLString
} = graphql;


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.signup({
                    email,
                    password,
                    req
                });
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req) {
                const { user } = req;
                req.logout();
                return user;
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.login({
                    email,
                    password,
                    req
                });
            }
        }
    }
});


module.exports = Mutation;