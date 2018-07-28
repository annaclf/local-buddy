const express = require('express');
const router = express.Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;

  if(!username || !password) {return res.render('auth/signup', {message: 'Incorrect! Please, try again'})}

  User.findOne({username})
  .then(user => {
    if(user){
      res.render('auth/signup', {message: 'Already existing user'});
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = new User();
      return newUser.save();
    }
  })
  .then( () => {
    res.redirect('/')
  })
  .catch(error => {
    next(error)
  })
});



module.exports = router;