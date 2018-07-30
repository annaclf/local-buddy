const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const privateRoute = require('../middlewares/privateMiddleware');

const router = express.Router();

router.get('/', privateRoute.requireUser, (req, res, next) => {
  const data = {
    messages: req.flash('login')
  };

  let username = req.session.currentUser.username;

  User.findOne({ 'username': `${username}` })
    .then(user => {
      res.render('profile/me', user);
    })
    .catch(error => {
      next(error);
    });
});

// router.get('/me/reservations', (req, res, next) => {
//   User.findById(id)
//     .then(user => {
//       res.render('buddies/reservation');
//       console.log('show page to manage reservations');
//     })
//     .catch(error => {
//       next(error);
//     });
// });

// router.post('/me/reservations/:id/response', (req, res, next) => {
//   const { status } = req.body;
//   const { id } = req.params;
//   Reservation.findById(id)
//     .then((data) => {
//       console.log('change reservations status');
//     })
//     .catch(error => {
//       next(error);
//     });
// });

module.exports = router;
