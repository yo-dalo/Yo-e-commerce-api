const User = require('../models/User');

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
    return await User.create(data);
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
    updateUser,
    deleteUser
};
