exports.up = function(knex, Promise) {
    return knex.schema
        .table('restaurants', function(tbl) {
            tbl.binary('img_url', 250)
               .notNullable().defaultTo('')
            tbl.boolean('visited', 250)
               .notNullable().defaultTo(false)
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('restaurants', function(tbl) {
        tbl.dropColumn('img_url');
        tbl.dropColumn('visited');
    });
};
