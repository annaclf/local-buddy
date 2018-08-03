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
    .catch(error => {
      next(error);
    });
});

router.get('/edit', privateRoute.requireUser, (req, res, next) => {
  const {_id} = req.session.currentUser;
  User.findById(_id)
    .then(user => {
      console.log(user);
      res.render('profile/edit', user);
    })
    .catch(error => {
      next(error);
    });
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
    .then(user => {
      // console.log(user)
      res.redirect('/profile');
    })
    .catch(error => {
      next(error);
    });
});

// router.get('/reservations', authMiddle.loggedUser, (req, res, next) => {
//   const idTraveller = req.session.currentUser._id;
//   Reservation.find({ idTraveller: idTraveller }).populate('idBuddy')
//     .then(reservations => {
//       const accepted = reservations.filter(reservation => {
//         return reservation.status === 'Accepted';
//       });
//       const pending = reservations.filter(reservation => {
//         return reservation.status === 'Pending';
//       });
//       res.render('profile/reservations', {accepted, pending});
//     })
//     .catch(error => {
//       next(error);
//     });
// });

router.get('/reservations', authMiddle.loggedUser, (req, res, next) => {
  const idTraveller = req.session.currentUser._id;
  Reservation.find({ idTraveller: idTraveller }).populate('idBuddy')
    .then(reservations1 => {
      const accepted = reservations1.filter(reservation => {
        return reservation.status === 'Accepted';
      });
      const pending = reservations1.filter(reservation => {
        return reservation.status === 'Pending';
      });
      const idBuddy = req.session.currentUser._id;
      Reservation.find({ idBuddy: idBuddy }).populate('idTraveller')
        .then(reservations2 => {
          const pending2 = reservations2.filter(reservation => {
            return reservation.status === 'Pending';
          });
          res.render('profile/reservations', {accepted, pending, pending2});
        })
        .catch(error => {
          next(error);
        })
        .catch(error => {
          next(error);
        });
    });
});

router.post('/reservations', authMiddle.loggedUser, (req, res, next) => {
  const { status, id } = req.body;

  Reservation.findByIdAndUpdate(id, {status})
    .then(() => {
      res.redirect('/profile/reservations');
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
