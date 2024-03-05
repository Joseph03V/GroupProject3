const {Schema,model} = require('mongoose')
const date = require("../../client/src/utils/date")

const ReactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 300
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => date(createdAtVal)
    }
})

const Reaction = model('Reaction',ReactionSchema)
module.exports = Reaction