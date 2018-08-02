const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  reconnectTries: Number.MAX_VALUE,
  // useNewUrlParser: true
})
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch(() => {
    console.log('Error connection to mongo');
  });

module.exports = mongoose;