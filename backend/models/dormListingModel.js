const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dormListingSchema= new Schema({
  postedBy: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  offer: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  }

}, { timestamps: true })

module.exports = mongoose.model('dormListing', dormListingSchema)