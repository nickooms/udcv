const knex = require('./db');

knex
  .select()
  .table('users')
  .then(x => console.log(x));
