const {
    getAllOrders, 
    getOrder, 
    newOrder, 
    updateOrder
} = require('../../controllers/order');
const router = require("express").Router();

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.post('/', newOrder);
router.put('/:id', updateOrder);

module.exports = router;
