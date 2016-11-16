import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'
import requireDir from 'require-dir'

const resolvers = requireDir('./resolvers')

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    }
  }
})

// const userType = new GraphQLObjectType({
//   name: 'User',
//   fields: {
//     id: {
//       type: new GraphQLNonNull(GraphQLString)
//     },
//     username: {
//       type: new GraphQLNonNull(GraphQLString)
//     }
//   }
// })

// const loginResultType = new GraphQLObjectType({
//   name: 'LoginResult',
//   fields: {
//     user: {
//       type: userType
//     },
//     token: {
//       type: new GraphQLNonNull(GraphQLString)
//     }
//   }
// })

// const registerUserMutation = {
//   type: loginResultType,
//   args: {
//     username: {
//       type: GraphQLString
//     },
//     password: {
//       type: GraphQLString
//     }
//   },
//   resolve: resolvers.user.create
// }

// const mutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     registerUser: registerUserMutation
//   }
// })

export default new GraphQLSchema({
  query: queryType
  // mutation: mutationType
})
