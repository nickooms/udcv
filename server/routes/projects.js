const express = require('express');

const { projects } = require('../controllers');

const router = express.Router();

router.get('/', async (_req, res) =>
  res.status(200).json(await projects.all())
);

router.get('/project/:id', async (req, res) =>
  res.status(200).json(await projects.get(req.params.id))
);

module.exports = router;
