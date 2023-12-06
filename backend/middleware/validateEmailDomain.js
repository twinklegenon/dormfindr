const { check, validationResult } = require('express-validator');

const validateEmailDomain = check('email')
  .isEmail().withMessage('Please enter a valid email address.') // Validates the email format
  .bail() // Proceeds to the next validation if the previous one is successful
  .custom((value) => {
    if (!value) {
      throw new Error('Email address is required.');
    }
    if (!value.endsWith('@tip.edu.ph')) {
      throw new Error('Only email addresses with the "tip.edu.ph" domain are allowed.');
    }
    return true;
  });

module.exports = { validateEmailDomain, validationResult };
