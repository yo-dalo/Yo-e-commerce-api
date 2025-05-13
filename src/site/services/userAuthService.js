const User = require('../models/User');
const bcrypt = require('bcryptjs');
const detectEmailOrPhone = require('../utils/detectEmailOrPhone');
const {log} = require('../utils/logger');
const generateToken = require('../utils/generateToken');
const {userGenerateToken} = require('../utils/jwtHelper');




const register = async (data) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(String(data.password), salt);

    const userData = {
        ...data,
        password: hashedPassword,
    };

    return await User.create(userData);
};





const login = async (data) => {
  const identifier = data?.phoneOrEmail;
  const password = data?.password;
const salt = await bcrypt.genSalt(10);
  let user;

  const type = detectEmailOrPhone(identifier);
  if (type === "email") {
    user = await User.getByEmail(identifier);
  } else if (type === "phone") {
    user = await User.getByPhone(identifier);
  } else {
    console.log("Invalid identifier type");
    return null;
  }

  if (!user) {
    console.log("User not found");
    return null;
  }

  const isValidPassword = await bcrypt.compare(String(password), user.password);
  if (!isValidPassword) {
    console.log("Invalid password");
    return null;
  }
     

  return {
    token: userGenerateToken(user),
    user,
  };
};




module.exports = {
    register,
    login,
};
