const {Schema, model} = require('mongoose')
const {Reaction} = require('./reaction')
const dateFormat = require ('../../client/src/utils/date')

const postSchema = new Schema (
{
    // postImage: {
    //     type: Image,
    // },
    postText: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 300
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [Reaction]
},  
{
    toJson: {
        getters: true
    },
    id:false
}
)

postSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})
const Post = model ('Post',postSchema)
module.exports = Post