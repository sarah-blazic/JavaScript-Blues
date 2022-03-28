const router = require('express').Router();

const userRoutes = require('./user-routes');
const orderRoutes = require('./order-routes');
const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
router.use('/orderss', orderRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;