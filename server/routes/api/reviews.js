const controller = require('../../controllers/review');
const router = require("express").Router();

router.get('/:productId', controller.getAllReviews);
router.get('/:id', controller.getReview);
router.post('/', controller.newReview);
router.put('/:productId', controller.updateReview);
router.delete('/:productId', controller.deleteReview);

module.exports = router;