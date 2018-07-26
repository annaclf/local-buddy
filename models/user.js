const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true , unique: true },
  email: { type: String, required: true , unique: true },
  biography: { type: String, required: true , min: 0, max: 600 },
  city: { type: String, required: true },
  avatarUrl: { type: String, default: 'images/default-avatar.png' }
});

const User = mongoose.model('User', userSchema);

module.exports = User; 