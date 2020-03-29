const express = require('express');

const { clients } = require('../controllers');

const router = express.Router();

router.get('/', async (_req, res) => res.status(200).json(await clients.all()));

router.get('/client/:id', async (req, res) =>
  res.status(200).json(await clients.get(req.params.id))
);

module.exports = router;
