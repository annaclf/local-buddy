const express = require('express');
const User = require('../models/user');
const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  let query = {};
  if (req.session.currentUser) {
    query = { _id: { $nin: [ req.session.currentUser._id ] } };
  }
  User.find(query)
    .then(user => {
      res.render('index', { user });
    })
    .catch(next);
});

module.exports = router;
