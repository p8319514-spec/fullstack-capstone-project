const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../db");

router.post("/api/auth/login", async (req, res) => {
  const db = await connectToDatabase();

  const collection = db.collection("users");

  const user = await collection.findOne({
    email: req.body.email
  });

  if (user) {
    res.json({
      username: user.username,
      email: user.email
    });
  } else {
    res.status(404).json({
      message: "User not found"
    });
  }
});

module.exports = router;
