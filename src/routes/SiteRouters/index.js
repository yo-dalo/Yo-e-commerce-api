const express = require('express');
const categoryRoutes = require('./categoryRoutes');
const subCategoryRoutes = require('./subCategoryRoutes');

const router = express.Router();





router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);




module.exports = router;