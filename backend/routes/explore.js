const express = require('express');
const {getBusinessByDate, getBusinessByRating} = require('../controllers/exploreControllers')

router.get('/', getBusinessByDate)

router.get('/', getBusinessByRating)

module.exports = router