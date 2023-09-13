const mongoose = require('mongoose')
const Schema = mongoose.Schema

const businessSchema = new Schema({
    userId : String,
    name:{type: 'string', required: true},
    Description: String,
    History: String,
    productsServices: Array,
    photos: Array,
    videos: Array,
    phoneNumber: String,
    email: String,
    address: String,
    location:{
        coordinatesX: Number,
        coordinatesY: Number
    },
    socialMedia:{
        facebook: Array,
        instagram: Array,
        whatsapp: Array,
        tiktok: Array,
        youtube: Array,
        other: Array
    },
    rating: {
        stars: Number,
        comments: Array,
    },

}, {timestamps: true})

module.exports = mongoose.model('Business', businessSchema)