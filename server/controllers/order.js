const db = require("../models/order");

module.exports = {

  getAllOrders: function(req, res) {
    db.Order.findAll({})
      .then(function(dbOrder) {
        res.json(dbOrder);
      });
  },

  getOrder: function(req, res) {
    db.Order.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbOrder) {
        res.json(dbOrder);
      });
  },

  newOrder: function(req, res) {
    console.log(req.body);
    db.Order.create({
      customer: req.body.customer,
      shippingType: req.body.shippingType,
      subtotal: req.body.subtotal,
      tax: req.body.tax,
      //tags: req.body.tags,
      shipCost: req.body.shipCost,
      orderDate: req.body.orderDate,
      shipDate: req.body.shipDate,
      items: req.body.items
    })
      .then(function(dbOrder) {
        res.json(dbOrder);
      });
  },

  /*
  deleteOrder: function(req, res) {
    db.Order.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbOrder) {
        res.json(dbOrder);
      });
  },
  */

  updateOrder: function(req, res) {
    db.Order.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbOrder) {
        res.json(dbOrder);
      });
  }
};
