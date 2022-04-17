import {
    getAllOrders, 
    getOrder, 
    newOrder, 
    updateOrder
} from '../../controllers/order';
const router = require("express").Router();

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.post('/', newOrder);
router.put('/:id', updateOrder);

module.exports = router;
