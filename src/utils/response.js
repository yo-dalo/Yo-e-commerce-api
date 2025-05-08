const successResponse = (res,message, data = {},statusCode = 200) => {
    return res.status(statusCode).json({
        status: 'success',
        data,
        message,
    });
};

const errorResponse = (res, message, statusCode = 400,) => {
  console.log(message);
    return res.status(statusCode).json({
        status: 'error',
        message,
    });
};

module.exports = { successResponse, errorResponse };
