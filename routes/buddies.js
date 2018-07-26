const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');

const router = express.Router();


/* GET users listing. */
// router.get('/', (req, res, next) => {
//   User.find()
//     .then(() => {
//       console.log('NOTHING TO DISPLAY IN THIS VIEW');
//     })
//     .catch((error) => {
//       next(error);
//     })
// });

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  User.find(id)
    .then((user) => {
      console.log('show buddy profile')
      res.render('/')
    })
    .catch((error) => {
      next(error);
    })
});

router.post('/:id/favourite', (req, res, next) => {
  User.find()
    .then(() => {
      console.log('add to buddy favourites');
    })
    .catch((error) => {
      next(error);
    })
});

router.get('/:id/reserve', (req, res, next) => {
  const { id } = req.params;
  Reservation.findById(id)
  .then(reservation => {
    console.log('show reservation');
  })
  .catch(error => {
    next(error);
  })
})

router.post('/:id/reserve', (req, res, next) => {
  const { id } = req.params;
  Reservation.findById(id)
  .then(reservation => {
    console.log('confirm buddy reservation');
  })
  .catch(error => {
    next(error);
  })
})


module.exports = router;
