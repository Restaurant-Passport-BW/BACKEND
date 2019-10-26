const express = require('express');

const router = express.Router();

const restaurants = require('./restaurantsAccess.js');



router.get('/', (req, res) => {
  restaurants.get()
       .then(restaurant => {
            res.json(restaurant)
       })
       .catch(err => {
          res.status(500).json(err)
       })
});

//get by restaurant id
  router.get('/:id', (req, res) => {
    const {id} = req.params;

    restaurants.getById(id)

         .then(restaurant => {
            if(restaurant){
                res.json(restaurant)
            }else{
                res.status(400).json({ message: "TRY AGAIN, there is no city with that id." });
            }
          })
          .catch(err => {
            res.status(500).json(err)
          });
  });

//get by city id
  router.get('/city/:id', (req, res) => {
     const {id} = req.params;
 
     restaurants.getByCityId(id)
 
          .then(restaurant => {
             if(restaurant){
                 res.json(restaurant)
             }else{
                 res.status(400).json({ message: "TRY AGAIN, there is no city with that id." });
             }
           })
           .catch(err => {
             res.status(500).json(err)
           });
   });


 

 
module.exports = router;