const express = require('express');
const User = require('../models/user');

const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  const { city } = req.query; 
  User.find({ city })
    .then(users => {
      const [user] = users;
      res.render('search/userlist', {users, city, user});
    })
    .catch(error => {
      next(error);
    })
});

module.exports = router;
