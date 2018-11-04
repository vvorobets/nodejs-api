const UserRepository = require("../repositories/UserRepository");
const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  createUser: (req, res) => {
    UserRepository.create(req.body, (err, data) => {
      if(err) return res.status(400).end();
      res.json(data);
    });
  },
  getAllUsers: (req, res) => {
    UserRepository.getAll((err, data) => {
      if(err) return res.status(400).end();
      res.json(data);
    });
  },
  getAllReceivers: () => {},
  getUser: (req, res) => {
    UserRepository.getOne(req.params.id, (err, data) => {
      if(err) return res.status(400).end();
      res.json(data);
    });
  },
  updateUser: (req, res) => {
    UserRepository.update(req.params.id, req.body, (err, data) => {
      if(err) return res.status(400).end();
      // ! needed to fix res.json(data);
      res.send(`Updated user ${req.params.id}`)
    });
  },
  deleteUser: (req, res) => {
    UserRepository.delete(req.params.id, (err, data) => {
      if(err) return res.status(400).end();
      res.json(data);
    });
  },

  getUserContacts: (req, res) => {
    let receivers = MessageRepository.getUserContacts(req.params.id, async (err, data) => {
      if(err) return res.status(400).end();
      console.log("Receivers: ", data);
      if(!data) res.json({});

      let senders = [], receivers = [];
      for(let item of data) {
        if(item.senderId !== req.params.id || senders.indexOf(item.senderId) < 0) {
          senders.push(item.senderId)
        }
        if(item.receiverId !== req.params.id || receivers.indexOf(item.receiverId) < 0) {
          receivers.push(item.receiverId)
        }        
      }
      async function getFullContacts(receivers, senders) {
        const contacts = {};
        if(receivers) {
          contacts.receivers = await UserRepository.getNamesByIdArray(receivers, (err, data) => {
            if(err) return res.status(400).end();
            console.log("Receivers: ", data);
            return data;
          });
          console.log("contacts.receivers: ", contacts.receivers);
        }
        if(senders) {
          contacts.senders = await UserRepository.getNamesByIdArray(senders, (err, data) => {
            if(err) return res.status(400).end();
            console.log("Senders: ", data);
            return data;
          });
        }
        console.log("Contacts: ", contacts);
        return await contacts;
      }
      res.json(getFullContacts(receivers, senders));
    });
  }
};
