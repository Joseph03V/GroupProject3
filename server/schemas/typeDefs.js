const typeDefs = `
type Post {
    username: String
    createdAt: String
    postImage: Image
    post Text: String
    reactions: [Reactions]
}

type Reaction {
    username: String
    reactionBody: String
    createdAt: String
}

Type User {
    username: String
    posts: [Post]
    pets: [pets]
    friends: [User]
}

Type Pet {
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