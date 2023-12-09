const express = require('express');
const router = express.Router();
const Profile = require('../models/SignUpModel'); // Replace with the correct path to your user model

router.post('/', async (req, res) => {
    const { email, otp } = req.body;
    
    try {
      const user = await Profile.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      
      const otpIsValid = user.otp === otp;
      const otpIsNotExpired = user.otpTimestamp > new Date(Date.now() - 300000); // 5 minutes validity
      
      if (otpIsValid && otpIsNotExpired) {
        user.verified = true;
        user.otp = undefined; // Clear the OTP as it's no longer needed
        user.otpTimestamp = undefined; // Clear the timestamp as well
        await user.save();
        res.status(200).json({ success: true, message: "Account verified" });
      } else {
        // It is helpful to log details here for debugging
        console.error(`OTP Verification failed for email ${email}. Valid: ${otpIsValid}, Not Expired: ${otpIsNotExpired}`);
        res.status(400).json({ success: false, message: "Invalid or expired OTP" });
      }
    } catch (error) {
      console.error(`OTP Verification error for email ${email}: ${error}`);
      res.status(500).json({ success: false, message: "Error during verification process" });
    }
  });

module.exports = router;
