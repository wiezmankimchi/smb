export const schema = gql`
  type User {
    id: Int!
    uuid: String!
    firstName: String!
    lastName: String!
    email: String!
    profileImage: String
    createdAt: DateTime!
    updatedAt: DateTime!
    userRoles: [UserRole]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    profileImage: String
  }

  input UpdateUserInput {
    uuid: String
    firstName: String
    lastName: String
    email: String
    profileImage: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
