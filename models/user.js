const mongoose = require('../dbmongo');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true , unique: true },
  city: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  highlights: { type: String, required: true , min: 0, max: 60 },
  biography: { type: String, required: true , min: 0, max: 600 },
  avatarUrl: { type: String, default: '../public/images/default-avatar.jpg' }
});

const User = mongoose.model('User', userSchema);

module.exports = User; 