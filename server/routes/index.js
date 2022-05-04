const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");
const stripe = require('stripe')('sk_test_51KsvsUGHngg3wb7931XRlk9xsus6vbnxTavV0EGdtBVTX1A6EjXsrfJS4gHxJ90dWf4WVmfydIAOtmSep49SFM1q00InFGLsyD')

// API Routes
router.use('/api', apiRoutes);

// stripe
router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.redirect(303, session.url);
});

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;