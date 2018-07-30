const express = require('express');
const User = require('../models/user');

const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
  const { city } = req.query;
  console.log(city);
  User.find({ city }, { avatarUrl:1, fullname:1, city:1, highlights:1, biography:1 })
    .then(users => {
      console.log(users);
      res.render("search/userlist", { users });
    })
    .catch(error => {
      next(error);
    })
});

module.exports = router;