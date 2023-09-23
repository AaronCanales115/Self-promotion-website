const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//create jwt function
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//get all users
const getUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
}

//get a single user
const getUser = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findById(id)
    
    if(!user) {
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
} 

//create a new user | sign up 
const createUser = async (req, res) => {
    const {email, password, name, lastName, age, gender, professions, skills, experiences, phoneNumber} = req.body

    //Show empty fields
    let emptyFields = []
    if(!email){
        emptyFields.push('email')
    }
    if(!password){
        emptyFields.push('password')
    }
    if(!name){
        emptyFields.push('name')
    }
    if(!lastName){
        emptyFields.push('lastName')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields for basic info', emptyFields})
    }

    try {
        const user = await User.signup(email, password, name, lastName, age, gender, professions, skills, experiences, phoneNumber)

        //create token
        const token = createToken(user._id)
        const userFullname = name + ' ' + lastName 

        res.status(200).json({email, userFullname, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a user
const deleteUser = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findByIdAndDelete({_id: id})
    
    if(!user) {
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

//update a user
const updateUser = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    
    if(!user) {
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)
        const userFullname = user.name + ' ' + user.lastName
        

        res.status(200).json({email, userFullname, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createUser, 
    getUser, 
    getUsers, 
    deleteUser, 
    updateUser,
    loginUser
}