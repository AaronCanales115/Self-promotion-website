const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{type: 'string', required: true, unique: true},
    password:{type: 'string', required: true},
    name:{type: 'string', required: true},
    lastName:{type: 'string', required: true},
    age: Number,
    gender: String,
    professions: Array,
    skills: Array,
    experiences: Array,
    phoneNumber: String,
    //business: [{type: Schema.Types.ObjectId, ref: 'Business'}]

}, {timestamps: true})

//static signup method
userSchema.statics.signup = async function(email, password, name, lastName, age, gender, professions, skills, experiences, phoneNumber) {
    const exist = await this.findOne({email})

//validations
    if (exist) {
        throw Error('email already in use')
    }
    if (!validator.isEmail(email)) {
        throw Error('email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('password is not strong enough')
    }

//password hash
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash, name, lastName, age, gender, professions, skills, experiences, phoneNumber})

    return user
}

//static login method
userSchema.statics.login = async function(email, password) {
    //validatons 
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    //find user
    const user = await this.findOne({email})

    if (!user) {
        throw Error('Incorrect email')
    }
    //check if the password match
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('Users', userSchema)