const express = require('express');
const User = require('../models/user');

const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  const { city } = req.query; 
  let query = {};
  if (req.session.currentUser) {
    query = { city, _id: { $nin: [ req.session.currentUser._id ] } };
  }
  User.find(query)
    .then(users => {
      res.render('search/userlist', { users, city });
    })
    .catch(error => {
      next(error);
    })
});

module.exports = router;
