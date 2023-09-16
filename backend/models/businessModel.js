const mongoose = require('mongoose')
const Schema = mongoose.Schema

const businessSchema = new Schema({
    userId : {type: 'string', required: true},
    name:{type: 'string', required: true},
    description: String,
    history: String,
    productsServices: Array,
    photos: Array,
    videos: Array,
    phoneNumber: String,
    email: String,
    address: String,
    globalRating: Number,
    location:{
        coordinatesX: Number,
        coordinatesY: Number
    },
    socialMedia:{
        facebook: String,
        whatsapp: String,
        instagram: String,
    },
    reviews: [
    {
        rOwner: String,
        rComment: String,
        rRating: Number
    }],

}, {timestamps: true})

module.exports = mongoose.model('Business', businessSchema)