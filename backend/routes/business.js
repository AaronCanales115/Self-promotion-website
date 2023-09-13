const express = require('express');
const {createBusiness, getBusiness, getAllBusiness, deleteBusiness, updateBusiness} = require('../controllers/businessController')
const router = express.Router();

router.get('/', getAllBusiness)

router.get('/:id', getBusiness)

router.post('/', createBusiness)

router.delete('/:id', deleteBusiness)

router.patch('/:id', updateBusiness)

module.exports = router