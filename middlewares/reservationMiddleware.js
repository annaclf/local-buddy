module.exports = {
  compareDates: (req, res, next) => {
    const { id } = req.params;
    const { startDate, endDate } = req.query;

    // if (moment(startDate).isAfter(moment(endDate))) {
    //   req.flash('info', 'End date has to be after start date');
    //   res.redirect(`./buddies/${id}`);
    // }
    // else{
      next();
    //}
  }
};
