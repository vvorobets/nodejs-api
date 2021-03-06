const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/nodejs-api');

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
