const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const userRoutes = require('./users');
//const orderRoutes = require('./orders');
const reviewRoutes = require('./reviews');
const productRoutes = require('./products');

router.use('/users', userRoutes);
//router.use('/orders', orderRoutes);
//router.use('/reviews', reviewRoutes);
router.use('/products', productRoutes);
router.get('/dashboard', isAuthenticated, (req, res) => { res.status(200); });

module.exports = router;