const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config');

module.exports = (req,res,next) => {
  const Authorization = req.headers.authorization;
  if(!Authorization) return res.status(404).json({msg:'Please provide token in head authorization'});
  const token = Authorization.split(' ')[1];
  if(!token) return res.status(404).json({msg:'Token is not present as a Bearer token'});
try {
  const decode = jwt.verify(token, jwtSecret);
  req.userId = decode.userId;
} catch (error) {
  return res.status(401).json({msg: 'Invalid Token'})
}
  next();
}