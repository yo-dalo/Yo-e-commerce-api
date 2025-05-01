const User = require('../models/User');
const bcrypt = require('bcryptjs');
const detectEmailOrPhone = require('../utils/detectEmailOrPhone');
const {log} = require('../utils/logger');
const generateToken = require('../utils/generateToken');


const getAllUsers = async (query) => {
    return await User.getAll(query);
};

const getUserById = async (id) => {
    return await User.getById(id);
};

const getUserByIdForUpdate = async (id) => {
    return await User.getByIdForUpdate(id);
};

const createUser = async (data) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

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
    token: generateToken(user),
    user,
  };
};

const updateUser = async (id, data) => {
    await User.update(id, data);
};

const deleteUser = async (id) => {
    await User.delete(id);
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByIdForUpdate,
    createUser,
    login,
    updateUser,
    deleteUser
};
