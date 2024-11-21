const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
  id: {
    type: String,
    required: [true, "Please add id of user"],
  },
  token: {
    type: String,
    required: [true, "Please add the token"],
    unique: [true, "token already exists"],
  },

},
{
  timestamps: true,
});

module.exports = mongoose.model('Auth', authSchema);