var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server');
var db = require('../../models');
var expect = require('chai').expect;
chai.use(chaiHttp);

var request;

describe('GET /user_info/:id', function() {
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });
  it('should find our data', function(done) {
    db.userdb.bulkCreate([
      { username: '', description: 'username ' },
      { email: '', description: ' blahblah@email.com' },
      { pword: '', description: ' **********' }
    ])
      .then(function() {
        // Request the route that returns all examples
        request.get('/user_info/:id').end(function(err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('array')
            .that.includes({ username: 'First Example', email: 'First email', pword: 'password876' });

          // The `done` function is used to end any asynchronous tests
          done();
        });
      });
  });
});
//================================get user that doesnt exist===============================================
describe('GET /api/user_info/:id', function() {
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });
  it('should not find any user data', function(done) {
    db.userdb.bulkCreate([
      { username: '', description: ' ' },
      { email: '', description: ' ' },
      { pword: '', description: ' ' }
    ])
      .then(function() {
        // Request the route that returns all examples
        request.get('/api/user_info/').end(function(err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('array')
            .that.includes({ username: '', email: '', pword:''});

          // The `done` function is used to end any asynchronous tests
          done();
        });
      });
  });
});
//==========Post UserData==========================================================
describe('POST /api/user_info', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save an example user', function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      username: 'Example text',
      email: 'Example@descript.com',
      pword: 'password2344'
    };

    // POST the request body to the server
    request
      .post('/api/user_info')
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('object')
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});
//==========Delete UserData==========================================================
describe('DELETE /api/examples', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save an example', function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      text: 'Example text',
      description: 'Example description'
    };

    // POST the request body to the server
    request
      .post('/api/examples')
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('object')
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});
//POST a new user
//GET new user and validate data
// PUT updated user new data
// GET user and validate new data
// //DELETE user
// GET user and validate it doesn’t exist