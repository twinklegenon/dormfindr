const dormListing = require('../models/dormListingModel');
const mongoose = require('mongoose')
// get all 
const getDorms = async (req, res) => {
  const getdorms = await dormListing.find({}).sort({createdAT: -1})
  res.status(200).json( getdorms)
}
// get single
const getDorm = async (req, res) => {
  const { id } = req.params 

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such dorm'})
  }

  const getdorm= await dormListing.findById(id)
  if (!getdorm) {
    return res.status(404).json({error: 'No such dorm'})
  }
  res.status(200).json(getdorm)
}

// new workout
const createDorm  = async(req, res) => {
    const {postedBy, date, content, offer, images} = req.body
    // add doc to db
    try{
      const  getdorm = await dormListing.create({
        postedBy: postedBy, 
        date: date, 
        content: content,
        offer: offer,
        images: images})
      res.status(200).json(getdorm)
    } catch (error){
      res.status(400).json({error:error.message})
    }
  }

//delete workout
const deleteDorm = async (req, res) => {
  const { id } = req.params 

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such dorm'})
  }
  const getdorm = await dormListing.findOneAndDelete({_id: id})

  if (! getdorm) {
    return res.status(404).json({error: 'No such dorm'})
  } 
  res.status(200).json( getdorm)
}

const updateDorm = async (req, res) => {
  const { id } = req.params 

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such dorm'})
  }

  const  getdorm = await dormListing.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  if (!getdorm ) {
    return res.status(404).json({error: 'No such dorm'})
  } 
  res.status(200).json(getdorm)
}

module.exports = {
  getDorms,
  getDorm,
  createDorm,
  deleteDorm,
  updateDorm
}