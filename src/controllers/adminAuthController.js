const  adminAuthService = require("../services/adminAuthService");
const  adminService = require("../services/adminService");
const { successResponse, errorResponse } = require("../utils/response");
const {adminCookieName,isProduction} = require("../config/env");



exports.loginAdmin = async (req, res) => {
  
      const production = isProduction === 'true';
    try {
         const data = await adminAuthService.login(req.body);
         
          res.cookie(adminCookieName, data.token, {
            path: '/',
            httpOnly: production, // Set to true in production
            secure: production, // Only enable secure in production
            sameSite: production ? 'None' : 'Lax', // Adjust based on the environment
})

          successResponse(res, 'admin login successfull',  data.admin);
    } catch (err) {
        errorResponse(res, err.message);
    }
};

exports.registerAdmin = async (req, res) => {
    //   log(5);
    try {
  const id = await adminAuthService.register(req.file?.filename,req.body);
     successResponse(res, 'User created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

exports.adminIsLogin = async (req, res) => {
    try {
        const admin = await adminService.getAdminById(req?.admin?.id);
        return successResponse(res, "Cart items fetched successfully", admin);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.adminLogOut = async (req, res) => {
    try {
        const admin = await adminService.getUserById(req?.admin?.id);
        return successResponse(res, "Cart items fetched successfully", admin);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};