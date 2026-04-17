const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db');

router.get('/api/gifts', async (req, res) => {
  const db = await connectToDatabase();
  const data = await db.collection('gifts').find().toArray();
  res.json(data);
});

router.get('/api/gifts/:id', async (req, res) => {
  const db = await connectToDatabase();
  const data = await db.collection('gifts').findOne({
    id: parseInt(req.params.id)
  });
  res.json(data);
});

module.exports = router;
