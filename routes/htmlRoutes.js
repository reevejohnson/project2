var db = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/play", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get('/index', function(req, res) {
    res.render('index');
  })
  
  app.get('/player', function(req, res) {
    res.render('player');
  });

  app.get('/judge', function(req, res) {
    res.render('judge');
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
