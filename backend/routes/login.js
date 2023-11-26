// login.js

const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController');

// Define the login route
router.post('/', login);

module.exports = router;
