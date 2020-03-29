const express = require('express');

const { projectTasks } = require('../controllers');

const router = express.Router();

router.get('/', async (_req, res) =>
  res.status(200).json(await projectTasks.all())
);

router.get('/project-task/:id', async (req, res) =>
  res.status(200).json(await projectTasks.get(req.params.id))
);

module.exports = router;
