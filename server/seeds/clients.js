exports.seed = async knex => {
  try {
    await knex('clients').del();

    await knex('clients').insert({
      name: 'RoboVision',
      location: 'Antwerp Berchem Belgium'
    });
  } catch (err) {
    console.error(err);
  }
};
