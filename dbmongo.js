const mongoose = require('mongoose');
mongoose.connect(`/mongodb://localhost/${dbName}`,{
  keepAlive = true,
  reconnectTries: Number.MAX_VALUE
})


