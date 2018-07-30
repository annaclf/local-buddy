const express = require('express');
const User = require('../models/user');
const authMiddle = require('../middlewares/authMiddle');
const bcrypt = require('bcrypt');

const router = express.Router();
const saltRounds = 10;

// SIGN UP: --------------------------------------------------------------

router.get('/signup', (req, res, next) => {
  let numbers = [];
  for (let i = 18; i < 100; i++) {
    numbers.push(i);
  }
  const data = {
    messages: req.flash('info')
  };
  res.render('auth/signup', data);
});

router.post('/signup', authMiddle.validUserInputSignUp, (req, res, next) => {
  const { username, password, email } = req.body;
  
  User.findOne({ username })
    .then(user => {
      if (user) {
        res.render('auth/signup', {message: 'Already existing user'});
      } else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = new User({ username, hashedPassword, email });
        req.session.currentUser = newUser;
        return newUser.save();
      }
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

// LOGIN: --------------------------------------------------------------

router.get('/login', (req, res, next) => {
  const data = {
    messages: req.flash('info')
  };
  res.render('auth/login', data);
});

router.post('/login', authMiddle.validUserInputLogin, (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.render('auth/login', {message: 'Incorrect, please try again!'});
      }
      if (bcrypt.compareSync(password, user.password)) {
      // Save the login in the session!
        req.session.currentUser = user;

        console.log(`logged in as ${user.username}`);

        return res.redirect('/');
      } else {
        return res.render('auth/login', {message: 'Incorrect password, please try again!'});
      }
    })
    .catch(error => {
      next(error);
    });
});

// LOG OUT: --------------------------------------------------------------

router.post('/logout', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/');
});

module.exports = router;
