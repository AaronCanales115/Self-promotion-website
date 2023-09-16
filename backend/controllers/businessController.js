const Business = require('../models/businessModel')
const mongoose = require('mongoose')

//get all business
const getAllBusiness = async (req, res) => {
    const userId = req.user._id

    const business = await Business.find({userId}).sort({createdAt: -1})

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
        const {
            name, description, history, productsServices, photos, videos, 
            phoneNumber, email, address, coordinatesX, coordinatesY, facebook, whatsapp, instagram
        } = req.body

    try {
        const userId = req.user._id
        const business = await Business.create({
            userId, name, description, history, productsServices, photos, videos, 
            phoneNumber, email, address, location:{coordinatesX, coordinatesY}, socialMedia:{facebook, whatsapp, instagram}
        })

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