const express = require('express');
const User = require('../models/user');

const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  const { city } = req.query; 
  User.find({ city }, { avatarUrl: 1, fullname: 1, city: 1, highlights: 1, biography: 1 })
    .then(users => {
      res.render('search/userlist', { users, city });
    })
    .catch(error => {
      next(error);
    })
});

module.exports = router;
