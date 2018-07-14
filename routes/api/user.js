const router = require("express").Router();
// const userService = require("../../services/user");

/* router.get("/:id", (req, res, next) => {
  userService.findOne(Number(req.params.id), (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
}); */

// var User = require('./models/user.js');
var Message = require('../../models/message.js');

router.get("/:id", (req, res, next) => {
  var id = req.params.id;
    if (!id) res.json({});
	  else {
	    Message.find( {senderId: id}, 'receiverId -_id', (err, message) => {
		    if (err) {
		        res.type('html').status(500);
		        res.send('Error: ' + err);
		    } else if (!message) res.json({});
		    else res.json(message);
	    });
    }
});

module.exports = router;
