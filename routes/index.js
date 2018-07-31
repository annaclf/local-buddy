const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');

const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  User.find({},{ fullname: 1, city: 1, highlights: 1 })
    .then(user => {
      console.log(user);
      res.render('index', { user });
    })
    .catch(error => {
      next(error);
    })
});

module.exports = router;
