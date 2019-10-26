const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  getByCityId
  
};

function get() {
  return db('restaurants');
}

function getByCityId(id) {
  return db('restaurants')
    .where({ 'restaurants.city_id': id })
   
}

function getById(id) {
  return db('restaurants')
    .where({ 'restaurants.id': id })
   
}






