const knex = require('../db');

const TABLE = 'project_tasks';

exports.all = async () => knex(TABLE);

exports.get = async id =>
  knex(TABLE)
    .first()
    .where('id', id);
