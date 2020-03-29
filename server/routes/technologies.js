const express = require('express');

const { technologies } = require('../controllers');

const router = express.Router();

router.get('/', async (_req, res) =>
  res.status(200).json(await technologies.all())
);

router.get('/technology/:id', async (req, res) =>
  res.status(200).json(await technologies.get(req.params.id))
);

module.exports = router;
