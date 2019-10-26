const request = require('supertest'); 

const server = require('../api/server.js');

const db = require('../data/dbConfig.js');

describe('citiesRouter.js', () => {

  beforeEach(async () => {
      await db('cities').truncate();
  })

  it('should set environment to testing', () => {
      expect(process.env.DB_ENV).toBe('testing');

  })
 
});

describe('citiesRouter.js', () => {
 
  describe('GET /rpp/cities', () => {
    it('should return 200', () => {       
        return request(server)
        .get('/rpp/cities')
        .then(res => {
            
            expect(res.status).toBe(200);
        });    
    });
    
  });

  
});