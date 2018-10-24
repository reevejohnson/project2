var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

chai.use(chaiHttp);

var request;

   describe("GET /api/examples", function() {
       beforeEach(function() {
           request = chai.request(server);
           return db.sequelize.sync({ force: true });
       });
it("should find our data", function(done) {
    db.userdb.bulkCreate([
       { username: "", description: "username " },
       { email: "", description: " blahblah@email.com" },
       { pword: "", description: " **********" }
    ])
    .then(function() {
       // Request the route that returns all examples
       request.get("/api/player-score").end(function(err, res) {
         var responseStatus = res.status;
         var responseBody = res.body;

         expect(err).to.be.null;

         expect(responseStatus).to.equal(200);

         expect(responseBody)
           .to.be.an("array")
           .that.has.lengthOf(2);

         expect(responseBody[0])
           .to.be.an("array")
           .that.includes({ text: "First Example", description: "First Description" });

         expect(responseBody[1])
           .to.be.an("array")
           .that.includes({ text: "Second Example", description: "Second Description" });

         // The `done` function is used to end any asynchronous tests
         done();
       });
     });
   });
 });
