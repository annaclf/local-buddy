const express = require('express');
const router = express.Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;




//SIGN UP: --------------------------------------------------------------

router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
});

router.post('/signup', (req, res, next) => {
  const { username, password, email, city, age, highlights, biography } = req.body;

  if(!username || !password) {return res.render('auth/signup', {message: 'Incorrect! Please, try again'})}

  User.findOne({ username })
  .then(user => {
    if(user){
      res.render('auth/signup', {message: 'Already existing user'});
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = new User({ username, hashedPassword, email, city, age, highlights, biography });
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



//LOGIN: --------------------------------------------------------------

router.get('/login', (req, res, next) => {
  res.render('auth/login')
});


router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  
  User.findOne({ username })
  .then(user => {
    if(!user){
      return res.render('auth/login', {message: 'Error, please try again!'})
    }

    if (bcrypt.compareSync(password, user.password)) {
      req.session.currentUser = user;
      return res.redirect('/');
    } else {
      return res.render('login', {message: 'Incorrect password, please try again!'})
    }
  })
  .catch(error => {
    next(error);
  })
})



module.exports = router;