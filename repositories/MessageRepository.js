// const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");

class MessageRepository {
  constructor() {
    this.model = Message;
  }
  findIds(senderId, callback) {
    console.log("Getting receivers' ids...");
    var model = this.model;
    var query = model.find(
      {senderId: senderId}, 'receiverId -_id'
    );
    query.exec(callback);
  }
}

MessageRepository.prototype = new Repository();

module.exports = new MessageRepository();
