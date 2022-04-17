import { 
    getAllProducts, 
    getProduct, 
    getTaggedProducts, 
    newProduct, 
    updateProduct 
} from '../../controllers/product';
const router = require("express").Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.get('/:tag', getTaggedProducts);
router.post('/', newProduct);
router.put('/:id', updateProduct);

export default router;
