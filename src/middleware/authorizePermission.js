const db = require('../config/db'); // MySQL connection instance

const authorizePermission = (permissionName) => {
  return async (req, res, next) => {
    try {
      const adminId = req.admin?.id;

      if (!adminId) {
        return res.status(401).json({ message: 'Unauthorized: No admin ID found' });
      }

      // Step 1: Get admin's role_id
      const [adminResult] = await db.execute(
        'SELECT role_id FROM admins WHERE id = ?',
        [adminId]
      );

      if (!adminResult.length) {
        return res.status(404).json({ message: 'User not found' });
      }

      const roleId = adminResult[0].role_id;

      // Step 2: Check if role has required permission
      const [permResult] = await db.execute(
        `SELECT p.name FROM permissions p
         JOIN role_permissions rp ON p.id = rp.permission_id
         WHERE rp.role_id = ? AND p.name = ?`,
        [roleId, permissionName]
      );

      if (!permResult.length) {
        return res.status(403).json({ message: 'Access Denied: Missing permission' });
      }

      // User has permission
      next();
    } catch (err) {
      console.error('Permission Check Error:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};

module.exports = authorizePermission;
