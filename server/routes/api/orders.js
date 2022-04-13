const controller = require('../../controller/order');
const { updateOrder } = require('../../controllers/order');
const router = require("express").Router();

router.get('/', controller.getAllOrders);
router.get('/:id', controller.getOrder);
router.post('/', controller.newOrder);
router.put('/:id', updateOrder);

module.exports = router;
