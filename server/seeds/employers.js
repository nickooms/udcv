exports.seed = async knex => {
  try {
    await knex('employers').del();

    await knex('employers').insert({
      name: 'Neanex',
      location: 'Antwerp Berchem Belgium',
      url: 'https://www.neanex.com/',
      from_month: '2',
      from_year: 2018,
      to_month: '2',
      to_year: 2019,
      current: false
    });
  } catch (err) {
    console.error(err);
  }
};
