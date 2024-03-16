const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  day: String
})

const userModel = mongoose.model("lists", userSchema);
module.exports = userModel;