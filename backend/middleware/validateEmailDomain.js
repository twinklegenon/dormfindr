const { check, validationResult } = require('express-validator');

const validateEmailDomain = check('email')
  .isEmail().withMessage('Please enter a valid email address.')
  .bail()
  .custom((value, { req }) => {
    const userType = req.body.userType; // Assuming userType is passed in the request body
    if (!value) {
      throw new Error('Email address is required.');
    }
    if (userType === 'TIP Community' && !value.endsWith('@tip.edu.ph')) {
      throw new Error('Only email addresses with the "tip.edu.ph" domain are allowed for TIP Community.');
    } else if (userType === 'Dormitory Provider' && !value.endsWith('@gmail.com')) {
      throw new Error('Only email addresses with the "gmail.com" domain are allowed for Dormitory Provider.');
    }
    return true;
  });

module.exports = { validateEmailDomain, validationResult };