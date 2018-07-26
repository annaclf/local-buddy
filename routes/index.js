const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');

const router = express.Router();

/* GET home page. */
router.post('/', (req, res, next) => {
  res.render('index')
    .then(() => {
      console.log('show home screen');
    })
    .catch((error) => {
      next(error);
    })
});


module.exports = router;
