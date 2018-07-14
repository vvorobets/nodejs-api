// const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");

class UserRepository {
  constructor() {
    this.model = User;
  }
}

UserRepository.prototype = new Repository();

module.exports = new UserRepository();
