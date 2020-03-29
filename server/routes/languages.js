const express = require('express');

const { languages } = require('../controllers');

const router = express.Router();

router.get('/', async (_req, res) =>
  res.status(200).json(await languages.all())
);

router.get('/language/:id', async (req, res) =>
  res.status(200).json(await languages.get(req.params.id))
);

module.exports = router;
