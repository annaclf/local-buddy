module.exports = {
  compareDates: (req, res, next) => {
    const { id } = req.params;
    const { startDate, endDate } = req.query;
    // console.log('HUGOOOO:', startDate, endDate);
    let dateStart = new Date(startDate);
    let dateEnd = new Date(endDate);
    let now = Date.now();


    if (dateStart <= dateEnd && dateEnd >= now && dateStart >= now) {
      next();
    } else {
      req.flash('error', 'End date has to be after start date');
      res.redirect(`/buddies/${id}`);
    }
  }
};
