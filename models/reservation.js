const mongoose = require('../dbmongo');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const reservationSchema = new Schema({
  status: { type: String, enum: ['Accepted', 'Rejected', 'Pending'] },
  startDate: String,
  endDate: String,
  idBuddy: { type: ObjectId, ref: 'User' },
  idTraveller: { type: ObjectId, ref: 'User' },
  nameBuddy: String,
  avatarBuddy: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
