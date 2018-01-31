var request = require('supertest');
var server = require('../server');
//var agent = request.agent(server);
//var output = require("./app.test.output.js");
//var fs = require('fs');


describe('Basic Tests', function() {
    var TOKEN

    before(function(done) {
        server.on("systemStarted", function() {
            done();
        })
    })

    before(function(done) {
        // set-up directory/files
        done()
    })


    describe('App Running', function() {
        it('Should return landing page ', function(done) {
            //agent
            request(server)
                .post('/')
                .expect('Content-Type', /html/)
                .expect(200)
                .expect({}, done)
        })
    })

    describe('User authentication - SPECIAL: ', function() {
        before('Sign-up', function(done) {
            request(server)
                .post('/signup')
                .set('Content-Type', '/html')
                .expect(200)
                .end(function(err, res) {
                    done()
                })
        })

        it('Log-in', function(done) {
            request(server)
                .post('/login')
                .set('Authorization', 'JWT ' + TOKEN)
                .expect(200)
                .end(function(err, res) {
                    done()
                })
        })
    })
})