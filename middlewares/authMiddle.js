module.exports = {
  validUserInputSignUp: (req, res, next) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      req.flash('info', 'Missing info, please try again');
      return res.redirect('/signup');
    } else {
      next();
    }
  },
  validUserInputLogin: (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      req.flash('error', 'Missing info, please try again');
      return res.redirect('/login');
    } else {
      next();
    }
  },
  loggedUser: (req, res, next) => {
    if (req.session.currentUser) {
      next();
    } else {
      req.flash('info', 'Please, log in to book a buddy');
      return res.redirect('/login');
    }
  }
};
