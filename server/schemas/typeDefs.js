const typeDefs = `
type Post {
    _id: ID!
    username: String
    createdAt: String
    postImage: Image
    postText: String
    reactions: [Reactions]
}

type Reaction {
    _id: ID!
    username: String
    reactionBody: String
    createdAt: String
}

Type User {
    _id: ID!
    username: String
    posts: [Post]
    pets: [pets]
    friends: [User]
}

Type Pet {
    _id: ID!
    name: String
    breed: String
    gender: String
}

type Query {
    posts: [Post]
    users: [User]
    reactions: [Reactions]
    pets: [Pet]
    friends: [User]
}

Type Mutation {
    createPost(username:String!,createdAt:Date!,postImage:Image,postText:String!) : Post
    createUser(username:String!,pets:String!) : User
    createReaction(username: String!,createdAt:Date!,reactionBody:String!) : Reaction
    addPet(username:String!,pets:String!) : User
    addFriend(username:String!,friends:String!) : User
}
`

module.exports = typeDefs