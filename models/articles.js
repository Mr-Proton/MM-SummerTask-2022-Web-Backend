const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    desc : {type: String, required: true},
    paragraph: {type: String, required: true},
    likes: Number,
    views: Number
})

const articles =mongoose.model('articles',articleSchema)

module.exports= articles