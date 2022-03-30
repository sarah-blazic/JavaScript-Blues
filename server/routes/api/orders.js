const controller = require('../../controller/order');
const router = require("express").Router();

router.get('/', controller.getAllOrders);
router.get('/:id', controller.getOrder);
router.post('/', controller.newOrder);

module.exports = router;
