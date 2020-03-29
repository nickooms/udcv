exports.up = knex =>
  knex.schema.createTable('technologies', table => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('url');
    table.string('version');
  });

exports.down = knex => knex.schema.dropTable('technologies');
