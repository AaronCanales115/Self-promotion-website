const Business = require('../models/businessModel')
const mongoose = require('mongoose')

//get all business
const getAllBusiness = async (req, res) => {
    const business = await Business.find({})
    res.status(200).json(business)
}

//get a single business
const getBusiness = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Business not found'})
    }

    const business = await Business.findById(id)
    
    if(!business) {
        return res.status(404).json({error: 'Business not found'})
    }

    res.status(200).json(business)
} 

//create a new business 
const createBusiness = async (req, res) => {
    const {} = req.body

    try {
        const business = await Business.create({userName, password, name, lastName, age, gender, professions, skills, experiences, phoneNumber, email})
        res.status(200).json(business)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a business
const deleteBusiness = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Business not found'})
    }

    const business = await Business.findByIdAndDelete({_id: id})
    
    if(!business) {
        return res.status(404).json({error: 'Business not found'})
    }

    res.status(200).json(business)
}

//update a business
const updateBusiness = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Business not found'})
    }

    const business = await Business.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    
    if(!business) {
        return res.status(404).json({error: 'Business not found'})
    }

    res.status(200).json(business)
}

module.exports = {
    createBusiness, 
    getBusiness, 
    getAllBusiness, 
    deleteBusiness, 
    updateBusiness
}