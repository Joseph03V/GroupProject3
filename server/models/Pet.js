const {Schema, model} = require('mongoose')

const petSchema = new Schema ({
    owner: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

const Pet = model('Pet', petSchema)
module.exports = Pet