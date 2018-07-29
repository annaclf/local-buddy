const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');

const router = express.Router();


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('index')
});


/*
GET /buddies/:id
POST /buddies/:id/favourite

GET /buddies/:id/reserve
POST /buddies/:id/reserve - Post: Body: date, user id

GET /buddies/me
GET /buddies/me/reservations

POST /buddies/me/reservations/:id/response
*/


 


router.get('/buddie/:id', (req, res, next) => {
  const { id } = req.params;
  User.find(id)
    .then((user) => {
      console.log('show buddy profile')
      res.render('/buddies/profile', user)
    })
    .catch((error) => {
      next(error);
    })
});

router.post('/:id/favourite', (req, res, next) => {
  User.find()
    .then(() => {
      console.log('add buddy to favourites');
    })
    .catch((error) => {
      next(error);
    })
});

router.get('/:id/reserve', (req, res, next) => {
  const { id } = req.params;
  User.find(id)
  .then(reservation => {
    res.render('/buddies/form-reservation')
    console.log('show form reservation')

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

router.get('/me', (req, res, next) => {
  User.findById(id)
  .then(user => {
    res.render('buddies/profile', user)
    console.log('show user profile');
  })
  .catch(error => {
    next(error);
  })
})

router.get('/me/reservations', (req, res, next) => {
  User.findById(id)
  .then(user => {
    res.render('buddies/reservation')
    console.log('show page to manage reservations');
  })
  .catch(error => {
    next(error);
  })
})

router.post('/me/reservations/:id/response', (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;
  Reservation.findById(id)
  .then((data) => {
    console.log('change reservations status');
  })
  .catch(error => {
    next(error);
  })
})





module.exports = router;
