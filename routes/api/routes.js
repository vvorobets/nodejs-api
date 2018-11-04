const userServices = require("../../services/user");
const messageServices = require("../../services/message");

module.exports = function(app) {
  // users routes
  app.get("/api/users/", userServices.getAllUsers);
  app.get("/api/users/:id", userServices.getUser);
  app.post("/api/users", userServices.createUser);
  app.put("/api/users/:id", userServices.updateUser);
  app.delete("/api/users/:id", userServices.deleteUser);

  // messages routes
  app.get("/api/messages/", messageServices.getAllMessages);
  app.get("/api/messages/:id", messageServices.getMessage);
  app.post("/api/messages", messageServices.createMessage);
  app.put("/api/messages/:id", messageServices.updateMessage);
  app.delete("/api/messages/:id", messageServices.deleteMessage);
  // app.use("/api/user", user);

  // route to get all that user's receivers
  app.get("/api/users/:id/contacts", userServices.getUserContacts);
};
