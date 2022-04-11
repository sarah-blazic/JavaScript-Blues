const router = require('express').Router();
<<<<<<< HEAD

const userRoutes = require('./users');
const orderRoutes = require('./orders');
const reviewRoutes = require('./reviews');
=======
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const userRoutes = require('./users');
const orderRoutes = require('./orders');
const reviewRoutes = require('./reviews');
const productRoutes = require('./products');
>>>>>>> 12b80d0f0a9ea36e747bdd7b47279208a54c72df

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/reviews', reviewRoutes);
<<<<<<< HEAD
=======
router.use('/products', productRoutes);
router.get('/dashboard', isAuthenticated, (req, res) => { res.status(200); });
>>>>>>> 12b80d0f0a9ea36e747bdd7b47279208a54c72df

module.exports = router;