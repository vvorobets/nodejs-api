function Repository() {}

Repository.prototype.getReceivers = getReceivers;

function getReceivers(ids, callback) {
  var model = this.model;
  var query = model.find(
    {id:{$in:[ids]}}
  );
  query.exec(callback);
}

module.exports = Repository;
