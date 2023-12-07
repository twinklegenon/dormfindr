const mongoose = require('mongoose');
const Profile = require('../models/SignUpModel'); // Assuming the file name is Profile.js
const generateOTP = require('../services/generateOTP'); // Make sure the path is correct
const sendEmail = require('../services/sendEmail'); // Make sure the path is correct

// Get all profiles
const getProfiles = async (req, res) => {
  const profiles = await Profile.find({}).sort({createdAt: -1});
  res.status(200).json(profiles);
};

// Get single profile
const getProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Profile'});
  }

  const profile = await Profile.findById(id);
  if (!profile) {
    return res.status(404).json({error: 'No such Profile'});
  }
  res.status(200).json(profile);
  
};

// Create new profile
// Create new profile
const createProfile = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Profile.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create the user profile in the database
    const profile = await Profile.create({ username, email, password });

    // Generate OTP
    const otp = generateOTP();

    // Send OTP to user's email
    const subject = 'Account Verification';
    const html = `
    <html>
      <body>
        <p>Good Day, we are the <strong>TechExplorers!</strong></p>
        <p>Thank you for signing up for <strong>DormFinfr: Elevate Student Housing Navigation.</strong></p>
        <p>Here is your verification code: <strong style="font-size: 40px;">${otp}</strong></p>
      </body>
    </html>
  `;
    await sendEmail(email, subject, html); // Make sure sendEmail is properly set up to send emails

    // Respond with the profile and success message
    res.status(201).json({ profile, message: 'Profile created, verification email sent.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




// Delete profile
const deleteProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Profile'});
  }
  
  const profile = await Profile.findOneAndDelete({_id: id});
  if (!profile) {
    return res.status(404).json({error: 'No such Profile'});
  }
  res.status(200).json(profile);
};

// Update profile
const updateProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Profile'});
  }

  const profile = await Profile.findOneAndUpdate({_id: id}, {...req.body});
  if (!profile) {
    return res.status(404).json({error: 'No such Profile'});
  }
  res.status(200).json(profile);
  
};

module.exports = {
  getProfiles,
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile
};