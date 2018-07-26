const mongoose = require('mongoose');


mongoose.connect(`/mongodb://localhost/local-buddy`,
{
  reconnectTries: Number.MAX_VALUE
})
.then(() => {
  console.log('connected to mongoDB')
})
.catch( () => {})


module.exports = mongoose;