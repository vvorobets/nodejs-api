const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    createMessage: (req, res) => {
        MessageRepository.create(req.body, (err, data) => {
            if(err) return res.status(400).end();
            res.json(data);
        });
    },
    getAllMessages: (req, res) => {
        MessageRepository.getAll((err, data) => {
          if(err) return res.status(400).end();
          res.json(data);
        });
    },
    getMessage: (req, res) => {
        MessageRepository.getOne(req.params.id, (err, data) => {
          if(err) return res.status(400).end();
          res.json(data);
        });
    },
    updateMessage: (req, res) => {
        MessageRepository.update(req.params.id, req.body, (err, data) => {
          if(err) return res.status(400).end();
          // ! needed to fix res.json(data);
          res.send(`Updated Message ${req.params.id}`)
        });
    },
    deleteMessage: (req, res) => {
        MessageRepository.delete(req.params.id, (err, data) => {
          if(err) return res.status(400).end();
          res.json(data);
        });
    },
};