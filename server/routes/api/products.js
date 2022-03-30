const controller = require('../../controller/product');
const router = require("express").Router();

router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProduct);
router.get('/category/:category', controller.getCategory);
router.post('/', controller.newProduct);
router.put('/:id', controller.updateProduct)

module.exports = router;
