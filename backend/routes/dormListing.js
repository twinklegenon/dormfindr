const express = require('express')
const {getDorms,getDorm,createDorm,deleteDorm,updateDorm} = require('../controllers/dormListingController')
const router = express.Router()

// GET all 
router.get('/', getDorms)

// GET a single 
router.get('/:id', getDorm)

// POST 
router.post('/', createDorm)

// DELETE 
router.delete('/:id', deleteDorm)

// UPDATE 
router.patch('/:id', updateDorm)


module.exports = router