exports.up = knex =>
  knex.schema.createTable('clients', table => {
    table.increments();
    table.string('name');
    table.string('location');
    table.string('url');
  });

exports.down = knex => knex.schema.dropTable('clients');
