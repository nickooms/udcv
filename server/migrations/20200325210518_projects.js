exports.up = knex =>
  knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('url');
    table
      .integer('client_id')
      .unsigned()
      .references('clients.id');
    table
      .integer('employer_id')
      .unsigned()
      .references('employers.id');
  });

exports.down = knex => knex.schema.dropTable('projects');
