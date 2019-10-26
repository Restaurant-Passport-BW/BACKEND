const server = require('../api/server.js');
const request = require('supertest');
const UserAccess = require('./usersAccess.js');
const db = require('../data/dbConfig.js');

describe('usersAccess', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');

    })
   
});


describe('add()', () => {   
    
    it('should insert the provided user into the database', async () => {
        await UserAccess.add({ 
                username: "Paul",
                email: 'paul@gmail.com',                  
                password: 'paul' 
        });
                let useraccess = await db('users');

         expect(useraccess).toHaveLength(1);
    })


        it('should remove the provided user from the db (delete)', async () => {
            let user = await UserAccess.remove({ id: 1 });   

           
            let useraccess = await db('users');

    
        // expect(useraccess).toHaveLength(0); 
    

    })

});

describe('updateUser()', () => {

    //clean out users table before delete tests run
    beforeEach(async () => {
        await db('users').truncate();
    })

    //*****************TEST ONE**************************/
    it('should users in the database (update)', async () => {
        //insert two records in the database. will update one of them.
        await UserAccess.add({ 
            username: 'Paul',
            email: 'paul@gmail.com',                  
            password: 'paul' 
    });

        await UserAccess.add({ 
            username: 'New Paul',
            email: 'newpaul@gmail.com',                  
            password: 'newpaul' 
        });

        //select all records from the users table and assign the results to usermodel
        let useraccess = await db('users');

         //assert the record was inserted and the returned array has a length = 1
         expect(useraccess).toHaveLength(2);         
   


     })
 
});
