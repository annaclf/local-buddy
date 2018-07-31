const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const authMiddle = require('../middlewares/authMiddle');
const reservationMiddleware = require('../middlewares/reservationMiddleware');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.redirect('/');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      console.log(user);
      res.render('buddies/profile', user);
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/favourite', (req, res, next) => {
  User.find()
    .then(() => {
      console.log('add buddy to favourites');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id/book', authMiddle.loggedUser, reservationMiddleware.compareDates, (req, res, next) => { 
  const { id } = req.params;
  const { startDate, endDate } = req.query;

  res.render('buddies/form-reservations', {id, startDate, endDate});
  // const { id } = req.params;
  // User.find(id)
  //   .then(reservation => {
  //     res.render('buddies/form-reservation');
  //     console.log('show form reservation');
  //   })
  //   .catch(error => {
  //     next(error);
  //   });
});

router.post('/:id/reserve', (req, res, next) => {
  const { id } = req.params;
  Reservation.findById(id)
    .then(reservation => {
      console.log('confirm buddy reservation');
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
