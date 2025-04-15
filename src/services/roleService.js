const Role = require('../models/Role');

const getAllRoles = async (query) => {
    return await Role.getAll(query);
};

const getRoleById = async (id) => {
    return await Role.getById(id);
};

const getRoleByIdForUpdate = async (id) => {
    return await Role.getByIdForUpdate(id);
};

const createRole = async (data) => {
    return await Role.create(data);
};

const updateRole = async (id, data) => {
    await Role.update(id, data);
};

const deleteRole = async (id) => {
    await Role.delete(id);
};

module.exports = {
    getAllRoles,
    getRoleById,
    getRoleByIdForUpdate,
    createRole,
    updateRole,
    deleteRole
};
