const router = require('express').Router();
const User = require('../model/User');

router.get('/', async (req,res) =>{
  const user = await User.findById(req.userId).select('-password').lean();
  if(!user) res.status(404).json({msg:'No user Found, Please refresh your token/Login Again'});
  res.json(user);
})



module.exports = router;