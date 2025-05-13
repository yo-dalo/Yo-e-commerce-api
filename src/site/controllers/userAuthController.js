const  userAuthService = require("../services/userAuthService");
const  userService = require("../services/userService");
const { successResponse, errorResponse } = require("../utils/response");
const {userCookieName,isProduction} = require("../config/env");



exports.loginUser = async (req, res) => {
  
      const production = isProduction === 'true';
         
    try {
         const data = await userAuthService.login(req.body);
         
          res.cookie(userCookieName, data.token, {
            path: '/',
            httpOnly: production, // Set to true in production
            secure: production, // Only enable secure in production
            sameSite: production ? 'None' : 'Lax', // Adjust based on the environment
})
          successResponse(res, 'user login successfull', data.user );
    } catch (err) {
        errorResponse(res, err.message);
    }
};

exports.registerUser = async (req, res) => {
    try {
        const id = await userAuthService.register(req.body);
        successResponse(res, 'User created successfully', { id });
    } catch (err) {
        errorResponse(res, err.message);
    }
};

exports.userIsLogin = async (req, res) => {
    try {
        const user = await userService.getUserById(req?.user?.id);
        return successResponse(res, "Cart items fetched successfully", user);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.userIsLogOut = async (req, res) => {
    try {
        const user = await userService.getUserById(req?.user?.id);
        return successResponse(res, "Cart items fetched successfully", user);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};