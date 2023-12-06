const mongoose = require('mongoose');
const Profile = require('../models/SignUpModel'); // Assuming the file name is Profile.js

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
const createProfile = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const profile = await Profile.create({ username, email, password });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({error: error.message});
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
