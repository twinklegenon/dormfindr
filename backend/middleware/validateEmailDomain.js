// middleware/validateEmailDomain.js

const { check, validationResult } = require('express-validator');

const validateEmailDomain = check('email').custom((value) => {
  if (value.endsWith('@tip.edu.ph')) {
    return true;
  } else {
    throw new Error('Only email addresses with the "tip.edu.ph" domain are allowed.');
  }
});

module.exports = { validateEmailDomain, validationResult };
