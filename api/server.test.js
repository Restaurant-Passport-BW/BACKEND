const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  describe('GET /', () => {
    it('returns 200 OK', () => {
        request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200);
        });    
    });

  
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toMatch(/json/i); 

    });    

    it('should return {message_from_server: "This Is The Restaurant Passport Serve"}', async ()=> {
        const res = await request(server).get('/');

        expect(res.body.message_from_server).toBe("This Is The Restaurant Passport Server");
        expect(res.body).toEqual({message_from_server:"This Is The Restaurant Passport Server"});
    });

  });

  
});