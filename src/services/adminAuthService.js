const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const detectEmailOrPhone = require('../utils/detectEmailOrPhone');
const {log} = require('../utils/logger');
const {adminGenerateToken} = require('../utils/jwtHelper');




const register = async (img,data) => {
       log(img);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(String(data.password), salt);

    const adminData = {
        ...data,
        password: hashedPassword,
        img:img
    };

    return await Admin.create(adminData);
};





const login = async (data) => {
  
  const identifier = data?.phoneOrEmail;
  const password = data?.password;
  const salt = await bcrypt.genSalt(10);
  let admin;

  const type = detectEmailOrPhone(identifier);
  if (type === "email") {
    admin = await Admin.getByEmail(identifier);
  } else if (type === "phone") {
    admin = await Admin.getByPhone(identifier);
  } else {
    console.log("Invalid identifier type");
    return null;
  }

    
  if (!admin) {
    console.log("Admin not found");
    return null;
  }

  const isValidPassword = await bcrypt.compare(String(password), admin.password);
  if (!isValidPassword) {
    console.log("Invalid password");
    return null;
  }
     

  return {
    token: adminGenerateToken(admin),
    admin,
  };
  
};




module.exports = {
    register,
    login,
};
