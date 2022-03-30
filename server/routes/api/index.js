const router = require('express').Router();

const userRoutes = require('./users');
const orderRoutes = require('./orders');
const reviewRoutes = require('./reviews');

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;