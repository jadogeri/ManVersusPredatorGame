const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please add the user name"],
  },
  email: {
    type: String,
    required: [true, "Please add the user email address"],
    unique: [true, "Email address already taken"],
  },
  password: {
    type: String,
    required: [true, "Please add the user password"],

  },
  history:{
    type : [
      {
        name : String,
        verdict : String,
        date : String
      }
    ] , 
    "default" : []
  }
},
{
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);