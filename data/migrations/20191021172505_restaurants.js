
exports.up = function(knex) {
        return knex.schema
        .createTable('restaurants', tbl => {
            tbl.increments();
    
            tbl.string('name', 128)
               .notNullable()
    
            tbl.string('address', 500)
               .notNullable()
    
            tbl.integer('phone_number', 10)
               .unsigned()
               .notNullable()
               
            
            tbl.integer('city_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cities')
                .onDelete('CASCADE');
    
        })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('restaurants');
  
};
