const {User,Pet,Post,Reaction} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw AuthenticationError
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw AuthenticationError
            }
            const token = signToken(user);
            return { token, user };
        },
        createPost: async (parent,{args}) => {
            return await Post.create(args)
        },
        creatUser: async (parent,{args}) => {
            return await User.create(args)//how to link pets?
        },
        createReaction: async (parent,{args}) => {
            return await Reaction.create({args})//how to link post?
        },
        addPet: async (parent,{username,pets}) => {
            const pet = await User.findOneAndUpdate(
                {username},
                {pets},
                {new:true})
        },
        addFriend: async (parent,{username,friends}) => {
            return await User.findOneAndUpdate(
                {username:username},
                {friends},
                {new:true})
        }
    }
}

module.exports = resolvers