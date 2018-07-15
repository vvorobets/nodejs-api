const router = require("express").Router();
// const getReceivers = require("../../services/user");

let receivers = [];
const Message = require('../../models/message.js');
const User = require('../../models/user.js');

router.get("/:id", (req, res, next) => {
  // receivers.getReceivers(Number(req.params.id), (err, data) => {
  Message.find( {senderId: req.params.id}, 'receiverId -_id', (err, messages) => {
		if (!err) {
      for(let item of messages) {
        if(receivers.indexOf(item.receiverId) < 0) {
          receivers.push(item.receiverId);
        }; 
      };
      User.find({id:{$in:[receivers]}}, 'name', users => {
        res.json(users);
      });
  } else {
      res.status(400);
      res.end();
    }
	});
});

module.exports = router;
