const request = require('supertest'); // calling it "request" is a common practice

const server = require('../api/server.js');//this is our first red, file doesn't exist yet

const db = require('../data/dbConfig.js');

describe('postRouter.js', () => {
 
  describe('GET /rrp/restaurants', () => {
    //returns a promise
    it('should get restaurants return 200', () => {       
        return request(server)
        .get('/rpp/restaurants')
        .then(res => {
            
            expect(res.status).toBe(200);
        });    
    });
    it('should get restaurant by id, return 200', () => {       
      return request(server)
      .get('/rpp/restaurants/:id')
      .then(res => {
          
          expect(res.status).toBe(200);
      }); 
    
  });
  it('should get restaurants by city id, return 200', () => {       
    return request(server)
    .get('/rpp/restaurants/city/:id')
    .then(res => {
        
        expect(res.status).toBe(200);
    }); 
  
});

  
});
});
