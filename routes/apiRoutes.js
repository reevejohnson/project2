var db = require('../models');

module.exports = function(app) {
  //Get all meme cards
  app.get('/api/all-memes', function(req, res) {
    db.allMemes.findAll({}).then(function(dbMemes) {
      res.json(dbMemes);
    });
  });

  //Post a new meme
  app.post('/api/all-memes', function(req, res) {
    db.allMemes.create(req.body).then(function(dbMeme) {
      res.json(dbMeme);
    });
  });

  //Get all prompt cards
  app.get('/api/prompt-cards', function(req, res) {
    db.promptCards.findAll({}).then(function(dbCards) {
      res.json(dbCards);
    });
  });

  //Get one random prompt card
  app.get('/api/prompt-cards/random', function(req, res) {
    db.promptCards.findOne({order: [db.Sequelize.fn( 'RAND' )]})
    .then((dbCard) => {
      res.json(dbCard);
    });
  })

  //Post selected prompt card to database
  app.post("/api/selected-prompt-card", function(req, res) {
    db.SelectedPrompt.create(req.body).then(function(dbPrompt) {
      res.json(dbPrompt);
    });
  });

  //Get selected prompt card from database
  app.get("/api/selected-prompt-card", function(req, res) {
    db.SelectedPrompt.findAll({}).then(function(dbPrompt) {
      res.json(dbPrompt);
    });
  });

  // Delete a selected prompt from database
  app.delete('/api/selected-prompt-card/:id', function(req, res) {
    db.SelectedPrompt.destroy({ where: { id: req.params.id } }).then(function(dbPrompt) {
      res.json(dbPrompt);
    });
  });

  //Post to selected cards database
  app.post('/api/selected-cards', function(req, res) {
    db.SelectedCards.create(req.body).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  //Get all selected cards
  app.get('/api/selected-cards', function(req, res) {
    db.SelectedCards.findAll({}).then(function(dbCards) {
      res.json(dbCards);
    });
  });
};
