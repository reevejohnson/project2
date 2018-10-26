var chai = require('chai');
var assert = require('assert');
chai.use(chaiHttp);
const allMemes = require('../../models/allMemes');

describe('allMemes', function() {
  it('allMemes should return all memes linked', function() {
    assert.equal(allMemes(), allMemes);
  });
});