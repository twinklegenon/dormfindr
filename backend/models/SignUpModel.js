const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
    required: false // This field is not required in the database as it's temporary
  },
  otpTimestamp: {
    type: Date,
    required: false // This field is also not required as it's temporary
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);