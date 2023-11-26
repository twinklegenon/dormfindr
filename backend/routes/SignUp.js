const express = require('express')
const { getProfiles, getProfile, createProfile, deleteProfile, updateProfile } = require('../controllers/SignUpController')
const router = express.Router()

// GET all 
router.get('/', getProfiles)

// GET a single 
router.get('/:id', getProfile)

// POST 
router.post('/', createProfile)

// DELETE 
router.delete('/:id', deleteProfile)

// UPDATE 
router.patch('/:id', updateProfile)

module.exports = router