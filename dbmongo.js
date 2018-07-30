const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/local-buddy', {
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