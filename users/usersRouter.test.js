const request = require('supertest'); 

const server = require('../api/server.js');

const db = require('../data/dbConfig.js');

describe('userRouter.js', () => {

  beforeEach(async () => {
      await db('users').truncate();
  })

  it('should set environment to testing', () => {
      expect(process.env.DB_ENV).toBe('testing');

  })
 
});

describe('userRouter.js', () => {
 
  describe('GET /rpp/users', () => {
    it('should return 200', () => {       
        return request(server)
        .get('/')
        .then(res => {
            
            expect(res.status).toBe(200);
        });    
    });
    
  });

  
});