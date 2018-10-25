var db = require("../models");

module.exports = function(app) {
  //Get all meme cards
  app.get("/api/all-memes", function(req, res) {
    db.all_memes.findAll({}).then(function(dbMemes) {
      res.json(dbMemes);
    });
  });

  //Post a new meme
  app.post("/api/all-memes", function(req, res) {
    db.all_memes.create(req.body).then(function(dbMeme) {
      res.json(dbMeme);
    });
  });

  //Post to selected cards database
  app.post("/api/selected-cards", function(req, res) {
    db.SelectedCards.create(req.body).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  //Get all selected cards
  app.get("/api/selected-cards", function(req, res) {
    db.SelectedCards.findAll({}).then(function(dbCards) {
      res.json(dbCards);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
