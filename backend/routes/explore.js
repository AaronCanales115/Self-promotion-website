const express = require('express');
const {getBusinessByDate, getBusinessByRating} = require('../controllers/exploreControllers')

const router = express.Router();

router.get('/', getBusinessByDate)

router.get('/', getBusinessByRating)

module.exports = router