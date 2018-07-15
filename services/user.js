const UserRepository = require("../repositories/UserRepository");
const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  getReceiversIds: (senderId, callback) => {
    console.log("Services1...");
    MessageRepository.findIds(senderId, (err, data) => {
      callback(err, data);
    });
  },

  getReceivers: (ids, callback) => {
    console.log("Services2...");
    UserRepository.getById(ids, (err, data) => {
      callback(err, data);
    });
  }
};