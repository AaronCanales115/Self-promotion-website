const express = require('express');
const {createUser, getUser, getUsers, deleteUser, updateUser, loginUser, logoutUser} = require('../controllers/userController')
const router = express.Router();

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/signup', createUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

router.post('/login', loginUser)

router.post('/logout', logoutUser)

module.exports = router