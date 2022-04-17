const {
    getAllReviews,
    getReview,
    newReview,
    updateReview,
    deleteReview
} = require('../../controllers/review');
const router = require("express").Router();

router.get('/:productId', getAllReviews);
router.get('/:id', getReview);
router.post('/', newReview);
router.put('/:productId', updateReview);
router.delete('/:productId', deleteReview);

module.exports = router;