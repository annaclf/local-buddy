const express = require('express');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const privateRoute = require('../middlewares/privateMiddleware');
const authMiddle = require('../middlewares/authMiddle');

const router = express.Router();

router.get('/', privateRoute.requireUser, (req, res, next) => {
  const {_id} = req.session.currentUser;
  User.findById(_id)
    .then(user => {
      res.render('profile/me', user);
    })
    .catch(next);
});

router.get('/edit', privateRoute.requireUser, (req, res, next) => {
  const {_id} = req.session.currentUser;
  User.findById(_id)
    .then(user => {
      console.log(user);
      res.render('profile/edit', user);
    })
    .catch(next);
});

router.post('/edit', privateRoute.requireUser, (req, res, next) => {
  // @TODO - protect the routes
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

  const {_id} = req.session.currentUser;

  User.findByIdAndUpdate(_id, {
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
  })
    .then(() => {
      res.redirect('/profile');
    })
    .catch(next);
});

router.get('/reservations', authMiddle.loggedUser, (req, res, next) => {
  const myId = req.session.currentUser._id;
  const data = {};
  Reservation.find({ idTraveller: myId }).populate('idBuddy')
    .then(outgoing => {
      data.outgoingAccepted = outgoing.filter(reservation => {
        return reservation.status === 'Accepted';
      });
      data.pendingOut = outgoing.filter(reservation => {
        return reservation.status === 'Pending';
      });
    })
    .then(() => {
      Reservation.find({ idBuddy: myId })
        .populate('idTraveller')
        .then(incoming => {
          data.incomingAccepted = incoming.filter(reservation => {
            return reservation.status === 'Accepted';
          });
          data.pendingIn = incoming.filter(reservation => {
            return reservation.status === 'Pending';
          });
          res.render('profile/reservations', data);
        })
        .catch(next);
    })
    .catch(next);
});

router.post('/reservations', authMiddle.loggedUser, (req, res, next) => {
  const { status, id } = req.body;

  Reservation.findByIdAndUpdate(id, {status})
    .then(() => {
      res.redirect('/profile/reservations');
    })
    .catch(next);
});

module.exports = router;
