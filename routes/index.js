const express = require('express');
const User = require('../models/user');
const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  User.find()
    .then(user => {
      res.render('index', { user });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
