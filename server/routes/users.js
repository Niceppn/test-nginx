const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { connectionString } = require('../config.js');

mongoose.connect(connectionString)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
