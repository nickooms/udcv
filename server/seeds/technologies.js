exports.seed = async knex => {
  try {
    await knex('technologies').del();

    await knex('technologies').insert({
      name: 'JavaScript'
    });
  } catch (err) {
    console.error(err);
  }
};
