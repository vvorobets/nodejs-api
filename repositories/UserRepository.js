// const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");

class UserRepository {
  constructor() {
    this.model = User;
  }
  getById(ids, callback) {
    console.log("Getting receivers' data...");
    var model = this.model;
    var query = model.find(
      {id: {$in: ids}},
      'name -_id'
    );
  query.exec(callback);
  }
}

UserRepository.prototype = new Repository();

module.exports = new UserRepository();
