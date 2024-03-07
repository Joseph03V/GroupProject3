const db = require('../config/connection')
const {User,Post} = require('../models')
const cleanDB = require('./cleanDB')
const dummyUsers = require('./dumUsers.json')
const dummyPost = require('./dumPost.json')

db.once('open',async () => {
    await cleanDB('User','users')
    await cleanDb('Post','posts')

    await User.insertMany(dummyUsers)
    await Post.insertMany(dummyPost)

    console.log('Users and Posts seeded!')
    process.exit(0)
})