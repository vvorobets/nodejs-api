// const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");

class MessageRepository {
  constructor() {
    this.model = Message;
  }
}

MessageRepository.prototype = new Repository();

module.exports = new MessageRepository();
