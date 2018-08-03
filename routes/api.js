const express = require('express');
const User = require('../models/user');

const router = express.Router();

/* GET home page. */

router.get('/search', (req, res, next) => {
  const { city } = req.query;
  User.find({ city })
    .then(users => {
      res.status(200);
      res.json({users});
    })
    .catch(error => {
      res.status(500);
      res.json({ error });
    });
});

module.exports = router;
