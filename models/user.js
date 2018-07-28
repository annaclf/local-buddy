const mongoose = require('../dbmongo');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true , unique: true },
  
  city: { type: String, required: true },
  age: { type: Number, required: true, min: 18 },
  category: { type: String, enum:['Music', 'Sports', 'Party', 'Food', 'Culture', 'Leisure', 'Games', 'Other'], required: true },
  
  highlights: { type: String, required: true , minlength: 0, maxlength: 60 },
  biography: { type: String, required: true , minlength: 0, maxlength: 600 },
  bedsNumber: { type: Number, default: 1, required: true },
  typeBeds: { type: String, enum: ['Single Bed', 'Double Bed', 'Couch'], required: true },
  transport: { type: String, default: 'None' },
  
  avatarUrl: { type: String, default: '../public/images/default-avatar.jpg' }
});

const User = mongoose.model('User', userSchema);

module.exports = User; 