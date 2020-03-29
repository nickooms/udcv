const knex = require('../db');

const TABLE = 'projects';

exports.all = async () => knex(TABLE);

exports.get = async id =>
  knex(TABLE)
    .first()
    .where('id', id);
