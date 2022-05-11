const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
  stripeSession: async (req, res) => {
    let lineItems = [];
    req.body.data.forEach((item) => {
      let mappedItem = {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: parseInt(item.price * 100),
        },
        quantity: item.qty,
      };
      lineItems.push(mappedItem);
    });

    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://tripleclick.herokuapp.com/success",
      cancel_url: "https://tripleclick.herokuapp.com/fail",
    });

    //console.log(session);
    console.log("redirect??");
    res.json({ url: session.url });
    //res.redirect(303, session.url);
  },
};
