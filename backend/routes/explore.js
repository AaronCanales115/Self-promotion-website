const express = require('express');
const {getBusinessByDate, getBusinessByRating, getBusiness} = require('../controllers/exploreControllers')

const router = express.Router();

router.get('/bydate', getBusinessByDate)

router.get('/byrating', getBusinessByRating)

router.get('/:id', getBusiness)

module.exports = router