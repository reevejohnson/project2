var db = require("../models");

module.exports = function(app) {
  // Get all selected cards
  app.get("/api/selected-cards", function(req, res) {
    db.SelectedCard.findAll({}).then(function(dbCards) {
      res.json(dbCards);
    });
  });

  // Get all player scores
  app.get('/api/player-score', function(req, res) {
    db.PlayerScore.findAll({}).then(function(dbScores) {
      res.json(dbScores);
    })
  })

  //Get one player score by id
  app.get('/api/player-score/:id', function(req, res) {
    db.PlayerScore.findOne({ where: {id: req.params.id}}).then(dbScore => {
      res.json(dbScore);
    })
  })

  // Create a new selected card
  app.post("/api/selected-cards", function(req, res) {
    db.SelectedCard.create(req.body).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  //Create a new player score
  app.post("/api/player-score", function(req, res) {
    db.PlayerScore.create({}).then(function(dbScore) {
      res.json(dbScore);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
