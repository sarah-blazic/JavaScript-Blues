const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");
const stripe = require('stripe')('sk_test_51KsvsUGHngg3wb7931XRlk9xsus6vbnxTavV0EGdtBVTX1A6EjXsrfJS4gHxJ90dWf4WVmfydIAOtmSep49SFM1q00InFGLsyD')

// API Routes
router.use('/api', apiRoutes);

// stripe
router.post('/create-checkout-session', async (req, res) => {
  let lineItems =[];
  req.body.data.forEach(item => {
    let mappedItem = {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: parseInt(item.price),
      },
      quantity: item.qty,
    }
    lineItems.push(mappedItem);
  });
  console.log(req.body.data);
  
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          }
        }
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          }
        }
      },
    ],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });
  
  //console.log(session);
  console.log("redirect??");
  res.json({url: session.url});
  //res.redirect(303, session.url);
});

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;