const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/nodejs-api');

const messageSchema = mongoose.Schema({
    senderId: String,
    receiverId: String,
    text: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;