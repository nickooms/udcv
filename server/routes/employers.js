const express = require('express');

const { employers } = require('../controllers');

const router = express.Router();

router.get('/', async (_req, res) =>
  res.status(200).json(await employers.all())
);

router.get('/employer/:id', async (req, res) =>
  res.status(200).json(await employers.get(req.params.id))
);

module.exports = router;
