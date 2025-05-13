const express = require('express');
const categoryRoutes = require('./categoryRoutes');
const subCategoryRoutes = require('./subCategoryRoutes');
const posterRoutes = require('./posterRoutes');
const itemRoutes = require('./itemRoutes');

const router = express.Router();





router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);
router.use('/posters', posterRoutes);
router.use('/items', itemRoutes);




module.exports = router;