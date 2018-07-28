const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
