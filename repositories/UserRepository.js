// const connection = require("../db/dbconnect");
const User = require("../models/user");

class UserRepository {
  constructor() {
    this.model = User;
  }
  create(newUser, callback) {
    this.model.create(newUser, callback);
  }
  getAll(callback) {
    let query = this.model.find();
    query.exec(callback);
  }
  getOne(id, callback) {
    let query = this.model.findById(id);
    query.exec(callback);
  }
  update(id, newUser, callback) {
    let query = this.model.findByIdAndUpdate(id, newUser);
    query.exec(callback);
  }
  delete(id, callback) {
    let query = this.model.findByIdAndRemove(id);
    query.exec(callback);
  }
  getNamesByIdArray(ids, callback) {
    console.log("Hello from fishing names! ", ids);
    let query = this.model.find(
      {_id: {$in: ids}},
      'name -_id'
    );
  query.exec(callback);
  }
}

module.exports = new UserRepository();
