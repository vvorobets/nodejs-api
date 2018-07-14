function Repository() {}

Repository.prototype.getById = getById;

function getById(id, callback) {
  var model = this.model;
  var query = model.findOne({
    _id: id
  });
  query.exec(callback);
}

module.exports = Repository;
