const Business = require('../models/businessModel')
const mongoose = require('mongoose')

const getBusinessByDate = async (req, res) => {

    const business = await Business.find({}).sort({createdAt: -1})

    res.status(200).json(business)
}

const getBusinessByRating = async (req, res) => {

    const business = await Business.find().sort({globalRating: 1})

    res.status(200).json(business)
}

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

module.exports = {
    getBusinessByDate, getBusinessByRating, getBusiness
}