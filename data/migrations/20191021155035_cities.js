
exports.up = function(knex) {
    return knex.schema
        .createTable('cities', tbl => {

        tbl.increments();

        tbl.string('name', 100)
           .notNullable();
        
        tbl.string('state', 100)
           .notNullable();
        
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('cities')
};
