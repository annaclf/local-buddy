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
  const { username, password, email, fullname, city, age, category, highlights, biography, bedsNumber, typeBeds } = req.body;
  let { avatarUrl, transport } = req.body;
  if(!username || !password) {return res.render('auth/signup', {message: 'Incorrect! Please, try again'})}

  User.findOne({ username })
  .then(user => {
    if(user){
      res.render('auth/signup', {message: 'Already existing user'});
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      if(!avatarUrl) avatarUrl = '/images/default-avatar.jpg';
      if(!transport) transport = 'none';

      const newUser = new User({ username, password, email, fullname, city, age, category, highlights, biography, bedsNumber, typeBeds, transport, avatarUrl });
      req.session.currentUser = newUser;
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
  if( !username || !password ) return res.render('auth/login', { message: 'You have to fill all the fields' });

  User.findOne({ username })
  .then(user => {
    if(!user){
      return res.render('auth/login', {message: 'User or password are incorrect'})
    }
    if (bcrypt.compareSync(password, user.password)) {
      // Save the login in the session!
      req.session.currentUser = user;

      console.log(`logged in as ${user.username}`);

      return res.redirect('/');
    } else {
      return res.render('auth/login', {message: 'Incorrect password, please try again!'})
    }
  })
  .catch(error => {
    next(error);
  })
})

//LOG OUT: --------------------------------------------------------------

router.post('/logout', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/');
})

module.exports = router;
