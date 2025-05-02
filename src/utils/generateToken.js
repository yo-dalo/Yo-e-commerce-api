const jwt = require('jsonwebtoken');
//require('dotenv').config();
const { userJwtSecret, userJwtExpiresIn } = require('../config/env');

const generateToken = (payload) => {

  return jwt.sign(payload, userJwtSecret, { expiresIn: userJwtExpiresIn });
};

module.exports = generateToken;
