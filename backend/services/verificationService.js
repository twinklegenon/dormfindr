const crypto = require('crypto');
const { SignUpModel } = require('../models/SignUpModel');

// Function to generate a random verification code
const generateVerificationCode = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Function to save the verification code to the user's record
const saveVerificationCode = async (email, verificationCode) => {
  try {
    const user = await SignUpModel.findOne({ email: email });
    if (!user) {
      throw new Error('User not found');
    }
    user.verificationCode = verificationCode;
    // Set additional fields if necessary, like expiration time for the code
    await user.save();
  } catch (error) {
    console.error('Error saving verification code:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

// Function to verify the code submitted by the user against the saved code
const verifyCode = async (email, submittedCode) => {
  try {
    const user = await SignUpModel.findOne({ email: email });
    if (!user) {
      throw new Error('User not found');
    }
    if (user.verificationCode === submittedCode) {
      user.isVerified = true;
      await user.save();
      return { isVerified: true }; // Verification successful
    } else {
      return { isVerified: false, message: 'Invalid code' }; // Verification failed
    }
  } catch (error) {
    console.error('Error verifying code:', error);
    return { isVerified: false, message: error.message }; // Return error information
  }
};

module.exports = {
  generateVerificationCode,
  saveVerificationCode,
  verifyCode
};
