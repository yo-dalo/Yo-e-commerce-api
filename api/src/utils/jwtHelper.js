const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = '7d';

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role_id },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
