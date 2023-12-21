// In your routes file, add a new route for email verification
const express = require('express');
const router = express.Router();
router.get('/verify-email', async (req, res) => {
    // Extract the email or verification token from the query params
    const { email } = req.query;
  
    // Send the OTP to the user's email
    const otp = generateOTP();
    const subject = 'Verify Your Account';
    const text = `Your verification code is: ${otp}`;
    await sendEmail(email, subject, html);
  
    // Respond with a message that the email has been sent
    res.status(200).json({ message: 'Verification email sent.' });
  });
  module.exports = router;