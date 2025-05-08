class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
console.log(err);
    // Default values if not provided
    statusCode = statusCode || 500;
    message = message || 'Internal Server Error';

    res.status(statusCode).json({
        status: err.status || 'error',
        message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};

module.exports = { AppError, errorHandler };
