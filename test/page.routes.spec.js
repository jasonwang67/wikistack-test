var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app);



describe('http requests', function () {

  describe('GET /wiki/', function () {
    it('responds with 200',function(done){
    	 agent
    	.get('/wiki')
   		.expect(200, done);
    });

  });

  describe('GET /wiki/add', function () {
    it('responds with 200', function(done){
       agent
      .get('/wiki/add')
      .expect(200, done);
    });
  });

  describe('GET /wiki/:urlTitle', function () {
    it('responds with 404 on page that does not exist', function(done){
       agent
      .get('/wiki/:dinosaurs')
      .expect(404, done);
    });
    it('responds with 200 on page that does exist', function (done){
      agent
      .get('/wiki/monkeys')
      .expect(200, done);
    });
  });

  describe('GET /wiki/search', function () {
    it('responds with 200', function (done){
      agent
      .get('/wiki/search')
      .expect(200, done);
    });
  });

  describe('GET /wiki/:urlTitle/similar', function () {
    it('responds with 404 for page that does not exist');
    it('responds with 200 for similar page');
  });

  describe('POST /wiki', function () {
    it('responds with 302',function(){
    	agent
	.post('/some/route')
	.send({someProp: 'someString'});
    });
    it('creates a page in the database');
  });

});
