const mongoose = require('../dbmongo');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  email: { type: String, unique: true },
  fullname: { type: String },
  city: { type: String, lowercase: true },
  age: { type: Number, min: 18 },
  category: { type: String, enum: ['Music', 'Sports', 'Party', 'Food', 'Culture', 'Leisure', 'Games', 'Other'] },
  highlights: { type: String, minlength: 0, maxlength: 60 },
  biography: { type: String, minlength: 0, maxlength: 600 },
  bedsNumber: { type: Number },
  typeBeds: { type: String, enum: ['Single Bed', 'Double Bed', 'Couch'] },
  transport: { type: String },
  avatarUrl: { type: String, default: '/images/default-avatar.jpg' },
  reservations: [{type: ObjectId, ref: 'Reservation'}],
  position: Array
});

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

const User = mongoose.model('User', userSchema);
module.exports = User;
