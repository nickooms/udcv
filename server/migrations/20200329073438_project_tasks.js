exports.up = knex =>
  knex.schema.createTable('project_tasks', table => {
    table.increments();
    table.string('description');
    table
      .integer('project_id')
      .unsigned()
      .references('projects.id');
  });

exports.down = knex => knex.schema.dropTable('project_tasks');
