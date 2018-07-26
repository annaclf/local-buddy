const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  status: { type: String, enum: ['Accepted', 'Rejected', 'Pending'] },
  startDate: Date,
  endDate: Date,
  idBuddy: { type: ObjectId, ref:'User' },
  idTraveller: { type: ObjectId, ref:'User' }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation; 