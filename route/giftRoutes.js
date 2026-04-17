const express = require('express');
const router = express.Router();

function connectToDatabase() {
  console.log("Database connected");
}

connectToDatabase();

router.get('/api/gifts', (req, res) => {
  res.send("All gifts");
});

router.get('/api/gifts/:id', (req, res) => {
  res.send("Gift by ID");
});

module.exports = router;
