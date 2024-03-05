const Post = require('./post')
const {Schema,model} = require('mongoose')

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        pets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Pet'
            }
        ]
    },
    {
        toJson: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema.pre("findOneAndDelete", {document: false, query: true}, async function () {
    console.log("User pre-delete")
    const doc = await this.model.findOne(this.getFilter())
    console.log(doc.username)
    await Post.deleteMany({username: doc.username})
})

const User = model('User',userSchema)
module.exports = User