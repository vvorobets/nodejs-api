const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  }
};
