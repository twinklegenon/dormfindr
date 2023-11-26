const profileCon = require('../models/SignUpModel');
const mongoose = require('mongoose')
// get all 
const getProfiles = async (req, res) => {
  const getProfiles = await profileCon.find({}).sort({createdAT: -1})
  res.status(200).json(getProfiles)
}
// get single
const getProfile = async (req, res) => {
  const { id } = req.params 

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Profile'})
  }

  const ggetProfile= await profileCon.findById(id)
  if (!getProfile) {
    return res.status(404).json({error: 'No such Profile'})
  }
  res.status(200).json(getProfile)
}

// new workout
const createProfile  = async(req, res) => {
    const {email, fullName, password, confirmPass} = req.body
    // add doc to db
    try{
      const getProfile = await profileCon.create({
        fullName: fullName, 
        email: email, 
        password: password,
        confirmPass: confirmPass})
      res.status(200).json(getProfile)
    } catch (error){
      res.status(400).json({error:error.message})
    }
  }

//delete workout
const deleteProfile = async (req, res) => {
  const { id } = req.params 

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Profile'})
  }
  const getProfile = await profileCon.findOneAndDelete({_id: id})

  if (! getProfile) {
    return res.status(404).json({error: 'No such Profile'})
  } 
  res.status(200).json( getProfile)
}

const updateProfile = async (req, res) => {
  const { id } = req.params 

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Profile'})
  }

  const getProfile = await profileCon.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  if (!getdorm ) {
    return res.status(404).json({error: 'No such Profile'})
  } 
  res.status(200).json(getProfile)
}

module.exports = {
  getProfiles,
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile
}