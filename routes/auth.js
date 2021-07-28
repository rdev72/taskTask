const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config');


router.post('/signUp', async (req,res)=>{
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const user = await User.create(req.body);
    res.status(201).json({msg:'SuccessFully Registered', userId: user._id})
  } catch (error) {
    res.status(402).json({msg:'Invalid inputs'});
    console.log(error);
  }
})

router.post('/login', async(req,res) => {
  try {
    const user = await User.findOne({$or:[{email:req.body.email},{username: req.body.username}]}).lean();
    if(!user) return res.status(404).json({msg:'User not found with this email/username'});
    if(!bcrypt.compareSync(req.body.password, user.password)) return res.status(401).json({msg:'Invalid password'});
    const token = jwt.sign({userId:user._id}, jwtSecret);
    res.json({msg:'LoggedIn', token})
  } catch (error) {
    res.status(500).json({msg:'Invalid Input'});
    console.log(error)
  }
})

module.exports = router;