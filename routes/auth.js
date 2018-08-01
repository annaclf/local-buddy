const express = require('express');
const User = require('../models/user');
const authMiddle = require('../middlewares/authMiddle');
const bcrypt = require('bcrypt');

const router = express.Router();
const saltRounds = 10;

// SIGN UP: --------------------------------------------------------------

router.get('/signup', (req, res, next) => {
  const data = {
    messages: req.flash('info')
  };
  res.render('auth/signup', data);
});

router.post('/signup', authMiddle.validUserInputSignUp, (req, res, next) => {
  const { username, password, email } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const newUser = new User({ username, password: hashedPassword, email });

  newUser.save(function (err) {
    if (err) {
      req.flash('info', err.message);
      res.redirect('/signup');
    } else {
      req.session.currentUser = newUser;
      res.redirect('/');
    }
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
        req.flash('info', 'no user');
        return res.redirect('/login');
      } else {
        if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
          req.session.currentUser = user;
          return res.redirect('/');
        } else {
          req.flash('info', 'password wrong');
          return res.redirect('/login');
        }
      }
    })
    .catch(error => {
      next(error);
    });
});

// LOG OUT: --------------------------------------------------------------

router.post('/logout', authMiddle.loggedUser, (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/');
});

module.exports = router;
