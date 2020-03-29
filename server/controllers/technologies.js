const knex = require('../db');

const TABLE = 'technologies';

exports.all = async () => knex(TABLE);

exports.get = async id =>
  knex(TABLE)
    .first()
    .where('id', id);
