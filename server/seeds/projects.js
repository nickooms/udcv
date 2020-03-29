exports.seed = async knex => {
  try {
    await knex('projects').del();

    await knex('projects').insert({
      name: '3D Labeller',
      description:
        'Application to make annotations on 3D models (point-clouds) generated from an array of cameras.',
      // url: 'https://robovision.be/references/#1498767449777-413f404b-eba4c366-9b64',
      client_id: 1,
      employer_id: 1
    });
  } catch (err) {
    console.error(err);
  }
};
