const router = require('express').Router();

const userRoutes = require('./users');
const orderRoutes = require('./orders');
const reviewRoutes = require('./reviews');
const productRoutes = require('./products');

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/reviews', reviewRoutes);
router.use('/products', productsRoutes);

module.exports = router;