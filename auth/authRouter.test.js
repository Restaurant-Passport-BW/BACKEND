const request = require('supertest'); 
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

describe('authRouter.js', () => {
  beforeEach(async () => {
      await db('users').truncate();
  })

  it('should set environment to testing', () => {
      expect(process.env.DB_ENV).toBe('testing');

  })
 
});

describe('authRouter.js', () => {

  //test the register endpoint
  describe('POST /api/auth/register', () => {
    it('should register user', () => {
      return request(server)
        .post('/rpp/auth/register')
        .send({
            username: "Testing",
            email: "testing@gmail.com",
            password: "testing"
        })
        .then(res => {
          expect(res.status).toBe(201);
        })
    })
    it('should return json object', () => {
        return request(server)
        .post('/rpp/auth/register')
        .send({
            username: "Testing",
            email: "testing@gmail.com",
            password: "testing"
        })
        .then(res => {
          expect(res.type).toMatch(/json/i); //i means ignore case
        })
    })
  })

  //test the login endpoint
  describe('POST /api/auth/login', () => {
    it('should be a success', () => {
        return request(server)
        .post('/rpp/auth/login')
        .send({
            username: "Testing",
            password: "testing"
        })
        .then(res => {
            expect(res.status).toBe(200);
        })
    });
  });
  it('returns JSON', () => {
      return request(server)
      .post('/rpp/auth/login')
      .send({
          username: "Testing",
          password: "testing"
      })
      .then(res => {            
          expect(res.type).toMatch(/json/i); //i means ignore case
      });
  });

});