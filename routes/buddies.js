const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const authMiddle = require('../middlewares/authMiddle');
const reservationMiddleware = require('../middlewares/reservationMiddleware');
const privateRoute = require('../middlewares/privateMiddleware');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.redirect('/');
});

router.get('/:id', privateRoute.validObjectId, (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      res.render('buddies/profile', user);
    })
    .catch(next);
});

router.post('/:id/favourite', privateRoute.validObjectId, authMiddle.loggedUser, (req, res, next) => {
  User.find()
    .then(() => {
      console.log('add buddy to favourites');
    })
    .catch(next);
});

router.get('/:id/book', privateRoute.validObjectId, privateRoute.requireUser, reservationMiddleware.compareDates, (req, res, next) => {
  const { id } = req.params;
  const { startDate, endDate } = req.query;
  User.findById(id)
    .then(user => {
      console.log('hola');
      res.render('buddies/form-reservations', {startDate, endDate, user});
    })
    .catch(next);
});

router.post('/:id/book', privateRoute.validObjectId, authMiddle.loggedUser, (req, res, next) => {
  const idBuddy = req.params.id;
  const idTraveller = req.session.currentUser._id;
  const { startDate, endDate, status } = req.body;

  const data = {
    status,
    startDate,
    endDate,
    idBuddy,
    idTraveller
  };

  Reservation.create(data)
    .then(() => {
      res.redirect('/profile/reservations');
    })
    .catch(next);
});

module.exports = router;
