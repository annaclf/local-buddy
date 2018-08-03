const mongoose = require('mongoose');

module.exports = {
  requireUser: (req, res, next) => {
    if (req.session.currentUser) {
      next();
    } else {
      // req.session.lastUrl = req.header('Referer').split('/')[3];
      req.session.lastUrl = req.originalUrl;
      req.session.counter = 1;
      console.log(req.session.lastUrl);
      // req.flash('login', 'Missing info, please try again');
      res.redirect('/login');
    }
  },
  validObjectId: (req, res, next) => {
    const { id } = req.params;
    if (mongoose.Types.ObjectId.isValid(id) && id.match(/^[a-fA-F0-9]{24}$/)) {
      next();
    } else {
      res.render('404');
    }
  }
};
