const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwtHelper');

const authenticateUser = (req, res, next) => {
 // next();
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from header
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }

    req.user = decoded; // Attach user data to request object
    next();
};

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
     // next();
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden: You do not have permission.' });
        }
        next();
    };
};

module.exports = { authenticateUser, authorizeRoles };
