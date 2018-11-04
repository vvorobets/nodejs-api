// const connection = require("../db/dbconnect");
const Message = require("../models/message");

class MessageRepository {
  constructor() {
    this.model = Message;
  }
  create(newMessage, callback) {
    this.model.create(newMessage, callback);
  }
  getAll(callback) {
    let query = this.model.find();
    query.exec(callback);
  }
  getOne(id, callback) {
    let query = this.model.findById(id);
    query.exec(callback);
  }
  update(id, newMessage, callback) {
    let query = this.model.findByIdAndUpdate(id, newMessage);
    query.exec(callback);
  }
  delete(id, callback) {
    let query = this.model.findByIdAndRemove(id);
    query.exec(callback);
  }

  getUserContacts(id, callback) {
    // can't find any by senderId
    let query = this.model.find({$or: [{senderId: id}, {receiverId: id}]}, 'senderId receiverId -_id');
    query.exec(callback);
  }
}

module.exports = new MessageRepository();
