const UserRepository = require("../repositories/UserRepository");
const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  getReceiversIds: (senderId, callback) => {
    MessageRepository.findIds(senderId, (err, data) => {
      callback(err, data);
    });
  },

  getReceivers: (ids, callback) => {
    UserRepository.getById(ids, (err, data) => {
      callback(err, data);
    });
  }
};