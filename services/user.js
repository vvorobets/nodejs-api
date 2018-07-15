/* const UserRepository = require("../repositories/UserRepository");

function getReceivers(ids, callback) {
  UserRepository.getReceivers(ids, (err, data) => {
      callback(err, data);
  });
}; */
const User = require('../models/user.js');

function getReceivers(receivers) {
  User.find({id:{$in:[receivers]}}, 'name', (err, users) => {
    if (!err) {
    return users;
  } else {
    res.status(400);
    res.end();
  }
  });};

module.exports = getReceivers;