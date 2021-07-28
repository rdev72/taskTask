const {mongoUri} = require('../config');

const mongoose = require('mongoose');
mongoose.connect(mongoUri, {
  useNewUrlParser:true,
  useFindAndModify:false,
  useCreateIndex:true,
  useUnifiedTopology:true
})

const db = mongoose.connection;

db.once('open', ()=>console.log('MONGODB connected'));

//We will handle error but not now