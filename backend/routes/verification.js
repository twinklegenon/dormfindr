const express = require('express');
const router = express.Router();
const { verifyCode } = require('../services/verificationService');

router.post('/verify', async (req, res) => {
  const { email, code } = req.body;
  
  try {
    const result = await verifyCode(email, code);
    if (result.isVerified) {
      res.json({ success: true });
    } else {
      // Send the message from the verification service if the verification fails
      res.json({ success: false, message: result.message });
    }
  } catch (error) {
    // Log the error and send a server error response
    console.error('Server error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
