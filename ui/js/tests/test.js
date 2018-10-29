let request = require('request');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Register a new user', function(){
    let user = {
            "username": "user1",
            "email": "user1@gmail.com",
            "password": "@user1"
    }
  
    it('register a new user', function(){
        request.post({
            url: "https://herokufastfoodapi.herokuapp.com/api/v2/auth/register",
            body: user,
            json: true
          },
        function(error, response, body){
            expect(response.statusCode).to.equal(201);
        });
    });
})

describe('Login a user', function(){
    let user = {
        "username": "user1",
        "password": "@user1"
    }
    it('logins a  user', function(){
        request.post({
            url: "https://herokufastfoodapi.herokuapp.com/api/v2/auth/login",
            body: user,
            json: true
        },
        function(error, response, body){
            expect(response.statusCode).to.equal(200);
        });
    });
})