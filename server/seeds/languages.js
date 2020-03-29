exports.seed = async knex => {
  try {
    await knex('languages').del();

    await knex('languages').insert({
      name: 'Dutch',
      level: 'Native'
    });
  } catch (err) {
    console.error(err);
  }
};
