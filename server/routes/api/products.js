const controller = require('../../controller/product');
const router = require("express").Router();

router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProduct);
router.get('/tags/:tag', controller.getTaggedProducts);
router.post('/', controller.newProduct);
router.put('/:id', controller.updateProduct)

module.exports = router;
