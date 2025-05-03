const jwt = require('jsonwebtoken');

const { userJwtSecret, adminJwtSecret,adminJwtExpiresIn,userJwtExpiresIn } = require('../config/env');





const userGenerateToken = (user={}) => {
  
    return jwt.sign(
        { id: user?.id, name:user?.name,email:user?.email,phone:user?.phone},
        userJwtSecret,
        { expiresIn: userJwtExpiresIn }
    );
};
const useeVerifyToken = (token) => {
    try {
        return jwt.verify(token, userJwtSecret);
    } catch (error) {
        return null;
    }
};



const adminGenerateToken = (admin) => {
    return jwt.sign(
        { id: admin?.id, name:admin?.name,email:admin?.email,phone:admin?.phone},
        adminJwtSecret,
        { expiresIn: adminJwtExpiresIn }
    );
};
const adminVerifyToken = (token) => {
    try {
        return jwt.verify(token, adminJwtSecret);
    } catch (error) {
        return null;
    }
};

module.exports = { 
  userGenerateToken, 
useeVerifyToken,

adminGenerateToken,
adminVerifyToken,

  
  
};
