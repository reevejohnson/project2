var db = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get('/login', function(req, res) {
    res.render('login');
  });

  app.get('/new-account', function(req, res) {
    res.render('new-account');
  });

  app.get('/home', function(req, res) {
    res.render('home');
  });
  
  app.get('/player', function(req, res) {
    res.render('player');
  });

  app.get('/judge', function(req, res) {
    res.render('judge');
  });
  
  app.get("*", function(req, res) {
    res.render("404");
  });
};
