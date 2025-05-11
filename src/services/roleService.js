const Role = require('../models/Role');
const rolePermissionService = require('./rolePermissionService');
const log = require('../utils/logger');

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
  
  
   const roleId =  await Role.create(data);
    console.log(data.created_by);
    data.permissions.map(async(element)=>{
      
   const rolePermission =  await rolePermissionService.create({role_id:roleId,permission_id:element,created_by:Number(data?.created_by)});
    // console.log(rolePermission);
    })
  
   // return roleId;
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
