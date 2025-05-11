const express = require('express');

const helperRouters = require('./helperRouters');
const roleRoutes = require('./roleRoutes');
const categoryRoutes = require('./categoryRoutes');
const subCategoryRoutes = require('./subCategoryRoutes');
const sizeRoutes = require('./sizeRoutes');
const colorRoutes = require('./colorRoutes');
const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');
const itemVariantRoutes = require('./itemVariantRoutes');
const wishlistRoutes = require("./wishlistRoutes");
const itemImageRoutes = require("./itemImageRoutes");
const shippingDetailsRoutes = require("./shippingDetailsRoutes.js");

const couponRoutes = require("./couponRoutes");
const couponUsageRoutes = require("./couponUsageRoutes");
const cartRoutes = require("./cartRoutes");
const orderRoutes = require("./orderRoutes");
const orderItemRoutes = require("./orderItemRoutes");
const paymentRoutes = require("./paymentRoutes");
const refundRoutes = require("./refundRoutes");
const returnRoutes = require("./returnRoutes");
const posterRoutes = require("./posterRoutes");
const adminRoutes = require("./adminRoutes");
const rolePermissionRoutes = require("./rolePermissionRoutes");
const permissionRoutes = require("./permissionRoutes");


const router = express.Router();

router.use('/users', userRoutes);




router.use('/helper', helperRouters);
router.use('/roles', roleRoutes);
router.use('/categories', categoryRoutes);
router.use('/sub-categories', subCategoryRoutes);
router.use('/sizes', sizeRoutes);
router.use('/colors', colorRoutes);
router.use('/items',itemRoutes);
router.use('/item-variants', itemVariantRoutes);
router.use('/item-images', itemImageRoutes);

router.use("/wishlist", wishlistRoutes);
router.use("/shipping-details", shippingDetailsRoutes);
router.use("/coupons", couponRoutes);
router.use("/coupon-usage", couponUsageRoutes);
router.use("/cart", cartRoutes);
router.use("/orders", orderRoutes);
router.use("/order-items", orderItemRoutes);
router.use("/payments", paymentRoutes);
router.use("/refunds", refundRoutes);
router.use("/returns", returnRoutes);
router.use("/posters", posterRoutes);


router.use("/admins", adminRoutes);
router.use("/role-permissions", rolePermissionRoutes);
router.use("/permissions", permissionRoutes);

module.exports = router;
