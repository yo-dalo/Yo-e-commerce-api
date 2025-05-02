const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwtHelper');
const { userCookieName,adminCookieName,userJwtSecret,adminJwtSecret} = require('../config/env');



const userAuth = (req, res, next) => {
    const authCookie = req.cookies[userCookieName];
    
    if (!authCookie) {
        return res.status(401).json({ login: false, message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(authCookie, userJwtSecret);
        req.user = decoded;  // Pass the decoded token data to the next middleware
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Unauthorized: Token expired' });
        }
        console.log('Token verification failed:', err.message);
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
};

const adminAuth = (req, res, next) => {
    const authCookie = req.cookies[adminCookieName];
    
    if (!authCookie) {
        return res.status(401).json({ login: false, message: 'Unauthorized: No token provided' });
    }

    try {
        const decoded = jwt.verify(authCookie, adminJwtSecret);
        req.admin = decoded;  // Pass the decoded token data to the next middleware
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Unauthorized: Token expired' });
        }
        console.log('Token verification failed:', err.message);
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
};







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

module.exports = { authenticateUser, authorizeRoles ,adminAuth,userAuth};
