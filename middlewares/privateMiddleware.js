module.exports = {
  requireUser: (req, res, next) => {
    if (req.session.currentUser) {
      next();
    } else {
      req.flash('login', 'Missing info, please try again');
      res.redirect('/login');
    }
  }
};
