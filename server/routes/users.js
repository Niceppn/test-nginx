var express = require('express');
var router = express.Router();
import mongoose from 'mongoose';
import { connectionString } from '../config.js';

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
