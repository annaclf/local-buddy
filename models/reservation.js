const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  status: { type: String, enum: ['Accepted', 'Rejected', 'Pending'] },
  startDate: Date,
  endDate: Date,
  idBuddy: { type: Object, ref:'User' },
  idTraveller: { type: Object, ref:'User' }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation; 