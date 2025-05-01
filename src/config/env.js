require('dotenv').config();

module.exports = {
  userJwtSecret: process.env.USER_JWT_SECRET,
  adminJwtSecret: process.env.ADMIN_JWT_SECRET,
  userJwtExpiresIn: process.env.USER_JWT_EXPIRES_IN,
  adminJwtExpiresIn: process.env.ADMIN_JWT_EXPIRES_IN,
  userCookieName: process.env.USER_COOKIE_NAME,
  adminCookieName: process.env.ADMIN_COOKIE_NAME,
  isProduction: process.env.IS_PRODUCTION,
  
};
