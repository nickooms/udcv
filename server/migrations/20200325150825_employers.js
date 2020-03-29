const months = new Array(12)
  .fill(1)
  .map((value, index) => String(value + index));

exports.up = knex =>
  knex.schema.createTable('employers', table => {
    table.increments();
    table.string('name');
    table.string('location');
    table.string('url');
    table.enu('from_month', months);
    table.integer('from_year');
    table.enu('to_month', months);
    table.integer('to_year');
    table.boolean('current');
  });

exports.down = knex => knex.schema.dropTable('employers');
