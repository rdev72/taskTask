const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username:{type:String, required:true, unique:true},
  email:{type:String, required: true, unique:true},
  password:{type:String, required:true}
},{
  timestamps:{
    created_at : 'createdAt'
  }
})

module.exports = mongoose.model('user', UserSchema)