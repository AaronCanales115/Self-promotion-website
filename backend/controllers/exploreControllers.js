const Business = require('../models/businessModel')

const getBusinessByDate = async (req, res) => {

    const business = await Business.find().sort({createdAt: -1})

    res.status(200).json(business)
}
const getBusinessByRating = async (req, res) => {

    const business = await Business.find().sort({globalRating: 1})

    res.status(200).json(business)
}

module.exports = {
    getBusinessByDate, getBusinessByRating
}