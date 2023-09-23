const express = require('express');
const {createBusiness, getBusiness, getAllBusiness, deleteBusiness, updateBusiness} = require('../controllers/businessController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//check if the user is authenticated

router.use(requireAuth)

router.get('/', getAllBusiness)

router.get('/:id', getBusiness)

router.post('/', createBusiness)

router.delete('/:id', deleteBusiness)

router.patch('/:id', updateBusiness)

module.exports = router