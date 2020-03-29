exports.up = knex =>
  knex.schema.createTable('languages', table => {
    table.increments();
    table.string('name');
    table.string('level');
  });

exports.down = knex => knex.schema.dropTable('languages');
