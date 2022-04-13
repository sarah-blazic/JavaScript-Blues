const {
    getAllProducts, 
    getProduct, 
    getTaggedProducts, 
    newProduct, 
    updateProduct
} = require('../../controllers/product');
const router = require("express").Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.get('/:tag', getTaggedProducts);
router.post('/', newProduct);
router.put('/:id', updateProduct);

module.exports = router;
