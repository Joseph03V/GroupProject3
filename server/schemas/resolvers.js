const {User,Pet,Post,Reaction} = require('../models')

const resolvers = {
    Query: {
        posts: async () => {
            return await Post.find({})
        },
        users: async () => {
            return await User.find({}).populate('posts').populate({
                path: 'posts',
                populate: 'reactions'
            }).populate('pets').populate('friends')
        },
        reactions: async () => {
            return await Post.find({}).populate('reactions')
        },
        pets: async () => {
            return await User.find({}).populate('pets')
        },
        friends: async () => {
            return await User.find({}).populate('friends')
        }
    },
    Mutation: {
        createPost: async (parent,args) => {
            const post = await Post.create(args)
            return post
        }
    }
}

module.exports = resolvers