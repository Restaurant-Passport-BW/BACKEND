
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {name: "Los Angeles", state: 'California'},
        {name: "San Diego", state: 'California'},
        {name: "San Jose", state: 'California'},
        {name: "San Francisco", state: 'California'},
        {name: "Fresno", state: 'California'},
        {name: "Sacramento", state: 'California'},
        {name: "Long Beach", state: 'California'},
        {name: "Oakland", state: 'California'},
        {name: "Bakersfield", state: 'California'},
        {name: "Anaheim", state: 'California'},
        {name: "Santa Ana", state: 'California'},
        {name: "Riverside", state: 'California'},
        {name: "Stockton", state: 'California'},
        {name: "Irvine", state: 'California'},
        {name: "Chula Vista", state: 'California'},
        {name: "Fremont", state: 'California'},
        {name: "San Bernardino", state: 'California'},
        {name: "Modesto", state: 'California'},
        {name: "Fontana", state: 'California'},
        {name: "Santa Clarita", state: 'California'},
        {name: "Oxnard", state: 'California'},
        {name: "Moreno Valley", state: 'California'},
        {name: "Glendale", state: 'California'},
        {name: "Huntington Beach", state: 'California'},
      ]);
    });
};
