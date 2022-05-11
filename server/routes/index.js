const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");
const stripe = require("./stripe");

// API Routes
router.use('/api', apiRoutes);

// stripe
router.post('/create-checkout-session', stripe.stripeSession);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;