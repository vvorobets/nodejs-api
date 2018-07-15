const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/nodejs-api');

const messageSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    senderId: Number,
    receiverId: Number,
    body: Number
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;