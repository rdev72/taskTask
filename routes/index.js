const router = require('express').Router();
const auth = require('./auth');
const user = require('./user');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/', (req,res)=>res.send('api v1.0'));
router.use('/auth', auth);
router.use('/user', isLoggedIn,  user);

module.exports = router;