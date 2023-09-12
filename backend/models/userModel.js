const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName:{type: 'string', required: true},
    password:{type: 'string', required: true},
    name:{type: 'string', required: true},
    lastName:{type: 'string', required: true},
    age: Number,
    gender: String,
    professions: Array,
    skills: Array,
    experiences: Array,
    phoneNumber: String,
    email: String

}, {timestamps: true})

module.exports = mongoose.model('Users', UserSchema)