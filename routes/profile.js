const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const privateRoute = require('../middlewares/privateMiddleware');

const router = express.Router();

router.get('/', privateRoute.requireUser, (req, res, next) => {
  const { currentUser: { usernameLog } } = res.locals;
  User.findOne({ usernameLog })
    .then(user => {
      res.render('profile/me', user);
    })
    .catch(error => {
      next(error);
    });
});

router.get('/edit', privateRoute.requireUser, (req, res, next) => {
  res.render('profile/edit');
});

router.post('/edit', privateRoute.requireUser, (req, res, next) => {
  const {
    username,
    password,
    email,
    fullname,
    city,
    age,
    category,
    highlights,
    biography,
    typeBeds,
    bedsNumber,
    transport
  } = req.body;

  const { currentUser: { usernameLog } } = res.locals;

  User.findOneAndUpdate({ usernameLog }, () => {
    
  })
    .then(user => {

    })
    .catch(error => {
      next(error);
    });
});

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
