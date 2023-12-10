const express = require('express');
const router = express.Router();
const { getProfiles, getProfile, createProfile, deleteProfile, updateProfile } = require('../controllers/SignUpController');
const { validateEmailDomain, validationResult } = require('../middleware/validateEmailDomain');

// GET all profiles
router.get('/', getProfiles);

// GET a single profile by ID
router.get('/:id', getProfile);

// POST a new profile with email domain validation
router.post('/', [validateEmailDomain], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  createProfile(req, res);
});

// DELETE a profile by ID
router.delete('/:id', deleteProfile);

// PATCH (update) a profile by ID
router.patch('/:id', updateProfile);

module.exports = router;
