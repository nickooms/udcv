exports.seed = async knex => {
  try {
    await knex('project_tasks').del();

    await knex('project_tasks').insert({
      description: 'Develop a Node.js backend for the 3D labeller.',
      project_id: 1
    });
  } catch (err) {
    console.error(err);
  }
};
