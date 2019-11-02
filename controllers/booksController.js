const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log("req.body", req.body);
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}